require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;

mongoose.set("strictQuery", false);

//json middleware
app.use(express.json());
app.use(cors());

//connect to database
dbConnect();

//routes middleware
const recipesRoute = require("./routes/recipes");
const hopsRoute = require("./routes/hops");
const maltsRoute = require("./routes/malts");
app.use("/recipes", recipesRoute);

app.use("/hops", hopsRoute);

app.use("/malts", maltsRoute);

//once connected start listening to the server
mongoose.connection.once("open", () => {
  app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
  });
});
