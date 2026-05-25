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
const {
  createCourse,
  createSection,
  createLesson,
} = require("./controllers/courseCreation.js");
const getSingleCourse = require("./controllers/getCourse.js");
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

app.post("/create/course", createCourse);
app.post("/create/section", createSection);
app.post("/create/lesson", createLesson);

app.get("/course/:id", getSingleCourse)


module.exports = app;
