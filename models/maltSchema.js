const mongoose = require("mongoose");

const maltSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("malts", maltSchema);
