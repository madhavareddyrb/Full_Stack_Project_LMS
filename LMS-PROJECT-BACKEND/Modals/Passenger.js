const mongoose = require("mongoose")

const PassangerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  age: {
    type: Number,
    required: [true, "Age is Required"],
  },
  gender: {
    type: String,
    required: [true, "Gender is required"],
  },
  seatPreference: {
    type: Number,
    // required: [true, "name is required"],
  },
  idProof: {
    type: String,
    // required: [true, " is required"],
  },
  idNumber: {
    type: Number,
    // required: [true, "name is required"],
  },
  userId:{
    type: String,
    required: [true, "UserId is required"]
  }
});