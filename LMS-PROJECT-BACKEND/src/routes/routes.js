const userSchema = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userDocument = await userSchema.findOne({ Email: email });

    // console.log(
    //   { email, password },
    //   "Email, Passowrd from documentfrom client",
    // );

    // console.log(password, "password form FE");
    // console.log(userDocument.Password, "document lo unna password");

    // const hashPassword = await bcrypt.hash(password, 10);
    // console.log(hashPassword);
    if (userDocument === undefined || userDocument === null) {
      return res.status(401).json({
        message: "Email is not registered",
      });
    }
    const isPasswordMatch = await bcrypt.compare(
      password,
      userDocument.Password,
    );

    // console.log(isPasswordMatch);

    if (!isPasswordMatch) {
      return res.status(401).json({
        message: "Invalid password",
      });
    }

    const token = jwt.sign(
      {
        userId: userDocument.id,
        email: userDocument.Email,
      },
      process.env.JWT_SECERT_KEY,
      { expiresIn: "1h" },
    );
    return res.json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.signup = async (req, res) => {
  // const {
  //   userName,
  //   Email,
  //   Password,
  //   ConfirmPassword,
  //   Gender,
  //   DateOfBirth,
  //   Nationality,
  // } = req.body;

  // console.log(req.body);
  // try {
  //   const userAccountCreation = new User({
  //     userName,
  //     Email,
  //     Password,
  //     ConfirmPassword,
  //     Gender,
  //     DateOfBirth,
  //     Nationality,
  //   });
  try {
    const userAccountCreation = new userSchema(req.body);
    const { Email, Password, UserName } = userAccountCreation;
    console.log(Email, Password, "signup details");
    const hashPassword = await bcrypt.hash(Password, 10);
    userAccountCreation.Password = hashPassword;
    console.log(userAccountCreation);

    const existingUser = await userSchema.findOne({ Email: Email });
    const existingUserName = await userSchema.findOne({ UserName: UserName });

    if (existingUserName) {
      return res.json({ message: "UserName is Taken " });
    }
    if (existingUser) {
      return res.json({ message: "User Already Exits" });
    }

    await userAccountCreation.save();

    return res.json({
      success: true,
      message: "User created Successfully",
    });
  } catch (error) {
    console.error("Signup Error:", error.message);
  }
};
