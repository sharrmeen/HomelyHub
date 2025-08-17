
// const express = require("express");
// const propertyRoutes = require("./routes/propertyRoutes");
// const userRoutes = require("./routes/userRoutes");
// const cookieParser = require("cookie-parser");
// const app = express();
// app.use(express.json());
// app.use(cookieParser());
// app.use("/api/v1/rent/listing", propertyRoutes);
// app.use("/api/v1/rent/user", userRoutes);
// module.exports = app;


const express = require("express");
const propertyRoutes = require("./routes/propertyRoutes");
const userRoutes = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");
const cors = require("cors");``

const app = express();

app.use(cors({
  // origin: "http://localhost:3000",  
    origin:"https://homelyhub-0rqy.onrender.com",
  credentials: true                 
}));

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/rent/listing", propertyRoutes);
app.use("/api/v1/rent/user", userRoutes);

//health endpoint to maintain activity
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

module.exports = app;
