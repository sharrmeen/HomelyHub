// const _0x33db9b=_0x4485;function _0x6b7b(){const _0x243f9b=['connect','479315TNXfPW','13896dVUBVC','132290UQjxRc','854762lXjHgU','75036sUFDxk','config','105shePks','./app','618mQcNkz','396ULcCWZ','dotenv','log','mongoose','App\x20Running\x20on\x20port:\x20','108aasJlj','DATABASE_LOCAL','264CnATdQ','248GxdeAl','listen','90363kTSnfr'];_0x6b7b=function(){return _0x243f9b;};return _0x6b7b();}(function(_0x4b8036,_0x2a2c4e){const _0xce06d5=_0x4485,_0x282993=_0x4b8036();while(!![]){try{const _0xa23642=parseInt(_0xce06d5(0xab))/0x1+parseInt(_0xce06d5(0xae))/0x2+-parseInt(_0xce06d5(0xaf))/0x3*(parseInt(_0xce06d5(0xa4))/0x4)+parseInt(_0xce06d5(0xb1))/0x5*(-parseInt(_0xce06d5(0xb3))/0x6)+parseInt(_0xce06d5(0xa9))/0x7*(-parseInt(_0xce06d5(0xa7))/0x8)+-parseInt(_0xce06d5(0xb4))/0x9*(-parseInt(_0xce06d5(0xad))/0xa)+-parseInt(_0xce06d5(0xa6))/0xb*(parseInt(_0xce06d5(0xac))/0xc);if(_0xa23642===_0x2a2c4e)break;else _0x282993['push'](_0x282993['shift']());}catch(_0x59d7df){_0x282993['push'](_0x282993['shift']());}}}(_0x6b7b,0x5d952));const mongoose=require(_0x33db9b(0xa2)),app=require(_0x33db9b(0xb2)),dotenv=require(_0x33db9b(0xa0));dotenv[_0x33db9b(0xb0)]({'path':'./config.env'});let DB=process['env'][_0x33db9b(0xa5)];console[_0x33db9b(0xa1)](DB),mongoose[_0x33db9b(0xaa)](DB)['then'](()=>{const _0x477503=_0x33db9b;console[_0x477503(0xa1)]('DB\x20connection\x20Succesfull');});function _0x4485(_0x1663e4,_0x4dc1ab){const _0x6b7bac=_0x6b7b();return _0x4485=function(_0x4485f2,_0x410498){_0x4485f2=_0x4485f2-0xa0;let _0x5761a5=_0x6b7bac[_0x4485f2];return _0x5761a5;},_0x4485(_0x1663e4,_0x4dc1ab);}const port=0x1f40;app[_0x33db9b(0xa8)](port,()=>{const _0x3812db=_0x33db9b;console[_0x3812db(0xa1)](_0x3812db(0xa3)+port);});

const mongoose = require('mongoose');
const app = require('./app');
const dotenv = require('dotenv');

// Load environment variables from config.env
dotenv.config({ path: './config.env' });

// Get the database URI from environment variables
let DB = process.env.DATABASE;
console.log(DB);

// Connect to MongoDB
mongoose.connect(DB)
  .then(() => {
    console.log('DB connection Successful');
  });

// Start the server
// const port = 3001;
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App Running on port: ${port}`);
});
