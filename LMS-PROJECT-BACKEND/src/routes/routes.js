const Login = require("../models/Login");
const userSchema = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userDocument = await userSchema.findOne({ Email: email });
    console.log({ email, password }, "Email, Passowrd from client");
    const userPasswordbcrypt = await bcrypt.compare(
      password,
      userDocument.Password,
    );
    console.log(userPasswordbcrypt)

    const token = jwt.sign(
      {
        userId: userDocument.id,
        email: userDocument.Email,
      },
      process.env.JWT_SECERT_KEY,{expiresIn: "5"},
    );
    res.json(token);

    if (userDocument === undefined || userDocument === null) {
      return res.status(404).json({
        message: "Email is not registered",
      });
    }
    if (userDocument.Password != password) {
      return res.status(404).json({
        message: "Password is Wrong",
      });
    }

    // 3. Now it is safe to check the password
    if (userDocument.Password === password) {
      return res.json({ message: "Login Successful" });
    } else {
      return res.status(401).json({ message: "Invalid Password" });
    }
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
    await userAccountCreation.save();
    return res.json({
      success: true,
      message: "User created Successfully",
    });
  } catch (error) {
    console.error("Signup Error:", error.message);
  }
};
