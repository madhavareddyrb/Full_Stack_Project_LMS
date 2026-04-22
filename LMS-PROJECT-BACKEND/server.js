require("dotenv").config();
const connectDB = require("./config/db");
const http = require("http");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { connect } = require("http2");
const User = require("./Modals/User");

console.log("ConnectDB", connectDB());

const app = express();

app.use(express.json());

const corsOptions = {
  origin: "*",
  methods: ["GET", "PUT", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "Authrization"],
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hi Madhava");
});

// app.post("/signup", async (req, res) => {
//   try {
//     const { userName, Email, Password, Gender, DateOfBirth, Nationality } =
//       req.body;
//     const newUser = new User(req.body);

//     await newUser.save();
//     res.json({ message: "user created Successfuly" });
//   } catch (error) {
//     console.error(error);
//   }
// });

app.post("/signup", async (req, res) => {
  try {
    // 1. Create the user using the body from React
    const newUser = new User(req.body);

    // 2. Save to MongoDB
    await newUser.save();

    // 3. Send SUCCESS response
    return res.status(201).json({
      success: true,
      message: "User created Successfully",
    });
  } catch (error) {
    // 4. Send FAILURE response to React
    console.error("Signup Error:", error.message);

    // Check for Mongoose Duplicate Key Error (Code 11000)
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Username or Email already exists!",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server started check now");
});
