const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();

const connectDB = () => {
  
  
    mongoose.connect(process.env.MONGO_URI).then(()=>{
      console.log('MongoDB Connected:');
    }).catch(err=>{
      console.error(`Error: ${error.message}`.red.bold);
      process.exit(1);
    });

};

module.exports = connectDB;

