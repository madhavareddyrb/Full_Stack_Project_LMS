require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
console.log(process.env.MONGO_URI);


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDb Connection SuccessFull");
  } catch (error) {
    console.error("MongoDB Connection Error: ", error);
    process.exit(1);
  }
};


module.exports = connectDB;
