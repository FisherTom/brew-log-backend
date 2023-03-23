require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8000;

mongoose.set("strictQuery", false);

//json middleware
app.use(express.json());

//connect to database
dbConnect();

//routes middleware
const recipesRoute = require("./routes/recipes");
app.use("/recipes", recipesRoute);

//once connected start listening to the server
mongoose.connection.once("open", () => {
  app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
  });
});
