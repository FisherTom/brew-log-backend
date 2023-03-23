require("dotenv").config();
const mongoose = require("mongoose");
const dbConnect = require("./config/dbConnect");
const testRecipes = require("./data/test-data/testRecipes.js");
const Recipe = require("./models/recipe");

dbConnect();

const seedDB = () => {
  return Recipe.deleteMany({}).then(() => {
    return Recipe.insertMany(testRecipes);
  });
};

seedDB().then(() => {
  mongoose.connection.close();
  console.log("seed complete, connection closed");
});
