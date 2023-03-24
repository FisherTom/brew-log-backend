const express = require("express");
const router = express.Router();

//interact with DB by calling methods on this model
const Recipe = require("../models/recipeSchema");

//TODO seperate functionality to controller
//TODO Error handling

//get all
router.get("/", (req, res) => {
  Recipe.find()
    .then((recipes) => {
      res.status(200).send({ recipes });
    })
    .catch((err) => {
      console.log(err);
    });
});

//get one
router.get("/:id", (req, res) => {
  Recipe.findById(req.params.id)
    .then((recipe) => {
      res.status(200).send({ recipe });
    })
    .catch((err) => {
      console.log(err);
    });
});

//create one
router.post("/", (req, res) => {
  const recipe = new Recipe({
    name: req.body.name,
    abv: req.body.abv,
  });
  recipe
    .save()
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

//! Update recipe - update what?
router.patch("/:id", (req, res) => {});

//delete one
router.delete("/:id", (req, res) => {
  Recipe.findOneAndDelete({ _id: req.params.id })
    .then((removedRecipe) => {
      res.status(200).send(removedRecipe);
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
