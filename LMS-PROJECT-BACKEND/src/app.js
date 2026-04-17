const http = require("http");
const express = require("express");
const cors = require("cors");
const { signup, login, userProfile, verifyToken } = require("./routes/routes");
const  {authMiddleware}  = require("./middleware/authMiddlware.jsx");
const app = express();
app.use(express.json());

const corsOptions = {
  origin: "*",
  methods: ["GET", "PUT", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "Authrization"],
};

app.use(cors(corsOptions));

app.post("/signup", signup);
app.post("/login", login);
app.get("/userprofile", userProfile)

app.get("/verify", authMiddleware, verifyToken)

module.exports = app;
