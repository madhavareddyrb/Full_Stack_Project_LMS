const mongoose = require("mongoose");

const userModel = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "UserName is Required"],
      trim: true,
      minlength: [4, "Minimum 4 Characters"],
    },

    email: {
      type: String,
      required: [true, "Email is Required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/.+\@.+\..+/, "Please enter a valid email"],
    },

    password: {
      type: String,
      required: [true, "Password is Required"],
      minlength: [6, "Minimum 6 Characters"],
    },
    onBoardingStatus: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

userModel.pre("save", async function () {
  if (!this.isModified("password")) return;

  const bcrypt = require("bcrypt");
  this.password = await bcrypt.hash(this.password, 10);
});


module.exports = mongoose.model("Users", userModel);
