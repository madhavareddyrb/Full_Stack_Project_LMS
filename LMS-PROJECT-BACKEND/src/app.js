const http = require("http");
const express = require("express");
const cors = require("cors");
const {
  signup,
  login,
  userProfile,
  verifyToken,
  dashboard,
  onBoarding_Complete,
} = require("./routes/routes");
const { authMiddleware } = require("./middleware/authMiddlware.jsx");
const app = express();
app.use(express.json());

const corsOptions = {
  origin: "*",
  methods: ["GET", "PUT", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.post("/signup", signup);
app.post("/login", login);
app.get("/userprofile", authMiddleware, userProfile);
app.get("/ins", onBoarding_Complete);

app.get("/instructor/onboarding-complete", authMiddleware, onBoarding_Complete);

module.exports = app;
