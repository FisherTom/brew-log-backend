require("dotenv").config();
const mongoose = require("mongoose");
const dbConnect = require("./config/dbConnect");
const testRecipes = require("./data/test-data/testRecipes.js");
const hops = require("./data/hops");
const malts = require("./data/malts");
const Recipe = require("./models/recipeSchema");
const Malt = require("./models/maltSchema");
const Hop = require("./models/hopSchema");

const seedRecipes = () => {
  return Recipe.deleteMany({}).then(() => {
    return Recipe.insertMany(testRecipes);
  });
};
const seedHops = () => {
  return Hop.deleteMany({}).then(() => {
    return Hop.insertMany(hops);
  });
};
const seedMalts = () => {
  return Malt.deleteMany({}).then(() => {
    return Malt.insertMany(malts);
  });
};

dbConnect()
  .then(() => {
    console.log("seed recipes");
    return seedRecipes();
  })
  .then(() => {
    console.log("seed hops");
    return seedHops();
  })
  .then(() => {
    console.log("seed complete malts");
    return seedMalts();
  })
  .then(() => {
    mongoose.connection.close();
    console.log("seed complete, connection closed");
  });
