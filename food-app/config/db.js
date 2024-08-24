const mongoose = require("mongoose");
const colors = require("colors");
//function mongodb database connection

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to Database ${mongoose.connection.host}`.bgWhite);
  } catch (error) {
    console.log("DB error", error);
  }
};

module.exports = connectDb;
