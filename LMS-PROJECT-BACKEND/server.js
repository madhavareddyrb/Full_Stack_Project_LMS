require("dotenv").config();
const http = require("http");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { connect } = require("http2");
const connectDB = require("./src/config/config");

const app = require("./src/app");

console.log("ConnectDB", connectDB());

app.listen(process.env.PORT, () => {
  console.log("Server started check now");
});
