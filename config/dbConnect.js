const mongoose = require("mongoose");

const dbConnect = () => {
  return mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("mongoDB connection successful");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = dbConnect;
