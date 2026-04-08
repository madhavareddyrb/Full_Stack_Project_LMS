require("dotenv").config();
const connectDB = require("./config/db");
const http = require("http");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { connect } = require("http2");
const userSchema = require("./Modals/User");
const loginSchema = require("./Modals/Login");

console.log("ConnectDB", connectDB());

const app = express();

app.use(express.json());

const corsOptions = {
  origin: "*",
  methods: ["GET", "PUT", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "Authrization"],
};

app.use(cors(corsOptions));

app.post("/signup", async (req, res) => {
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
});

// app.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     console.log(email, password, "email and password");
//     const userDocument = await userSchema.findOne({ Email: email });

//     if (!userDocument) {
//       return res.status(404).json({
//         success: false,
//         message: "Email is not registered. Please sign up first!",
//       });
//     }

//     // 3. If user exists, check if password matches

//     if (email === userDocument?.Email && password === userDocument?.Password) {
//       return res.json({ email, password, message: "User Login Success" });
//     } else {
//       return res.json({ message: "Invalid Credentials" });
//     }
//   } catch (error) {
//     return res.json({ message: " No User Found" });
//   }
// });

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Search for the user
    const userDocument = await userSchema.findOne({ Email: email });

    // 2. Check if the document is null (Email not found)
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
});
app.listen(process.env.PORT, () => {
  console.log("Server started check now");
});
