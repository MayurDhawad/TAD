let mongoose = require("mongoose");
let schema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    lookingFor: {
      type: String,
      required: true,
    },
    query: {
        type: String,
        required: true,
      }
  },
  { timestamps: true }
);

module.exports = mongoose.model("contactus", schema);
