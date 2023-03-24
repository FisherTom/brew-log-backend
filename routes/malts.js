const express = require("express");
const router = express.Router();

//interact with DB by calling methods on this model
const Malt = require("../models/maltSchema");

//TODO seperate functionality to controller
//TODO Error handling

//Get All
router.get("/", (req, res) => {
  Malt.find()
    .then((malts) => {
      res.status(200).send({ malts });
    })
    .catch((err) => {
      console.log(err);
    });
});
