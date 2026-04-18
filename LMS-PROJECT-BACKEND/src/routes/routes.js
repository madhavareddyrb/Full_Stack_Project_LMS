const userModel = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Account does not exists",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }

    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" },
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        userName: user.userName,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

exports.signup = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    if (!userName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await userModel.findOne({
      $or: [{ email }, { userName }],
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message:
          existingUser.email === email
            ? "Email already exists"
            : "Username already taken",
      });
    }

    const newUser = await userModel.create({
      userName,
      email,
      password,
    });

    newUser.password = undefined;

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    console.error("Signup Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

exports.userProfile = async (req, res) => {
  const userData = userModel.find({});
  try {
    const results = await userData
    res.json({ message: "userData Fetched", results});
  } catch (error) {
    res.json("data not fetching");
  }
};

exports.verifyToken = (req, res) => {
  res.status(200).json({
    message: "Token is valid",
    user: req.user,
  });
};

exports.dashboard = async (req, res) => {
  // Find all documents
  const loginUsersData = userModel.find({});

  console.log(loginUsersData, "loginUsersData");
  try {
    const results = await loginUsersData;

    console.log("results", results);
    res.json({ message: "fetched users data succesfully", results });
  } catch (error) {
    res.json({ message: "no data found" });
    console.log(error);
  }
};

