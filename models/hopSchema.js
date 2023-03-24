const mongoose = require("mongoose");

const hopSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  alpha_acid: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("hops", hopSchema);
