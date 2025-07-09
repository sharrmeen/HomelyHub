



// // seeder.js
// const mongoose = require('mongoose');
// const fs = require('fs');
// const dotenv = require('dotenv');
// const Property = require('./Models/propertyModel.js');

// dotenv.config({ path: './config.env' });

// const DB = process.env.DATABASE;

// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('MongoDB connected for seeding'));

// const rawData = fs.readFileSync(`${__dirname}/../Database/test.properties.json`, 'utf-8');
// let properties = JSON.parse(rawData);

// // Transform $oid objects to plain strings
// properties = properties.map((item) => {
//   if (item._id && item._id.$oid) {
//     item._id = item._id.$oid;
//   }
//   return item;
// });

// const importData = async () => {
//   try {
//     await Property.create(properties);
//     console.log('Data successfully imported!');
//     process.exit();
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }
// };

// importData();


const mongoose = require('mongoose');
const fs = require('fs');
const dotenv = require('dotenv');
const Property = require('./Models/propertyModel.js');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE;

const validAmenities = [
  'WiFi', 'Parking', 'Pool', 'Gym', 'Air Conditioning', 'Heating',
  'Kitchen', 'Washer', 'Dryer', 'TV', 'Smoke Detector', 'First Aid Kit'
];

const amenityFixMap = {
  'AC': 'Air Conditioning',
  'A/C': 'Air Conditioning',
  'Wifi': 'WiFi',
  'wifi': 'WiFi',
  'parking': 'Parking'
};

const fixAmenityName = (name) => {
  return validAmenities.includes(name)
    ? name
    : amenityFixMap[name] || null;
};

const extractOid = (value) => {
  if (value && typeof value === 'object' && value.$oid) {
    return value.$oid;
  }
  return value;
};

function fixData(properties) {
  return properties.map((item) => {
    // Fix _id, user, agent fields
    item._id = extractOid(item._id);

    item.user = extractOid(item.user);
    if (!mongoose.isValidObjectId(item.user)) {
      item.user = new mongoose.Types.ObjectId();
    }

    item.agent = extractOid(item.agent);

    // Fix amenities
    if (Array.isArray(item.amenities)) {
      item.amenities = item.amenities
        .map((a) => {
          if (typeof a === 'object' && a.name) {
            const fixed = fixAmenityName(a.name);
            return fixed ? { name: fixed } : null;
          }
          return null;
        })
        .filter(Boolean);
    }

    return item;
  });
}

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ MongoDB connected for seeding');
  seedData();
});

async function seedData() {
  try {
    const rawData = fs.readFileSync(`${__dirname}/../Database/cleaned_properties.json`, 'utf-8');
    let properties = JSON.parse(rawData);
    properties = fixData(properties);

    await Property.deleteMany();
    await Property.insertMany(properties);
    console.log('✅ Data successfully imported!');
    process.exit();
  } catch (err) {
    console.error('❌ Error importing data:', err);
    process.exit(1);
  }
}
