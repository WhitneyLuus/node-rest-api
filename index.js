//Add dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const mongodb = require("mongodb");
const cors = require("cors");
const exp = require("constants");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

//create application
const app = express();

//setting up dtenv
dotenv.config();

// Connect to MongoDB using mongoose
mongoose.connect(process.env.MONGO_URL);

//Log into console whether connection was established or not
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("Error connecting to MongoDB:", err);
});

//Middleware
app.use(express.json());
app.use(helmet());
//Morgan is watching date, request type, address, status and duration of response
app.use(morgan("common"));

//runs the user route
app.use("/api/users", userRoute);
//runs the auth route
app.use("/api/auth", authRoute);
//runs the auth route
app.use("/api/posts", postRoute);

//specifying port
app.listen(8800, () => {
  console.log("backend server is running");
});
