const express = require("express");
const router = express.Router();

//interact with DB by calling methods on this model
const Hop = require("../models/hopSchema");

//TODO seperate functionality to controller
//TODO Error handling

//Get All
router.get("/", (req, res) => {
  Hop.find()
    .then((hops) => {
      res.status(200).send({ hops });
    })
    .catch((err) => {
      console.log(err);
    });
});
