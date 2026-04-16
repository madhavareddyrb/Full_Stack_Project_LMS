const userModel = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const userDocument = await userModel.findOne({ email: email });

//     if (userDocument === undefined || userDocument === null) {
//       return res.status(401).json({
//         message: "Email is not registered",
//       });
//     }
//     const isPasswordMatch = await bcrypt.compare(
//       password,
//       userDocument.password,
//     );

//     if (!isPasswordMatch) {
//       return res.status(401).json({
//         message: "Invalid password",
//       });
//     }

//     const token = jwt.sign(
//       {
//         userId: userDocument.id,
//         email: userDocument.Email,
//       },
//       process.env.JWT_SECERT_KEY,
//       { expiresIn: "1h" },
//     );
//     return res.json({
//       message: "Login successful",
//       token,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 🔹 1. Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // 🔹 2. Find user
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // 🔹 3. Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // 🔹 4. Generate JWT
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        role: user.role, // useful for LMS
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" },
    );

    // 🔹 5. Send response (no password)
    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        userName: user.userName,
        email: user.email,
        role: user.role,
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
  try {
    const userData = await userSchema.find({});
    res.json(userData);
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