const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema(
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
  },
  { timestamps: true },
);

module.exports = mongoose.model("Login", loginSchema);
