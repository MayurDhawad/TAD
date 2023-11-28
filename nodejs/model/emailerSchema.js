let mongoose = require("mongoose");
let schema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique:true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("emailer", schema);
