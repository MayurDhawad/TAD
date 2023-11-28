let mongoose = require('mongoose');
let urls = require('../urls');

var connect = mongoose
  .connect(urls.MONGO_CLOUD_URL)
  .then(() => {
    console.log("----- Mongo Connected -----");
  })
  .catch((err) => {
    console.log("Mongo Failed to Connect!");
  });

module.exports = connect;
