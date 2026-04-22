const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "UserName is Required"],
      unique: true,
      trim: true,
      minlength: [4, "Minimum 4 Characters"],
    },
    Email: {
      type: String,
      required: [true, "Email is Required"],
      unique: true,
      trim: true,
      // minlength: [4, "Minimum 4 Characters"],
    },
    Password: {
      type: String,
      required: [true, "Password is Required"],
      // unique: true,
      // trim: true,
      minlength: [6, "Minimum 6 Characters"],
    },
    ConfirmPassword: {
      type: String,
      required: [
        true,
        "Password and ConfirmPassword is Required and Not Matched",
      ],
      // unique: true,
      // trim: true,
      // minlength: [6, "Minimum 4 Characters"],
    },
    Gender: {
      type: String,
      required: [true, "Gender is Required"],
    },
    DateOfBirth: {
      type: Date,
      required: [true, "Date Of Birth is Required"],
    },
    Nationality: {
      type: String,
      required: [true, "Nationality is Required"],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema)