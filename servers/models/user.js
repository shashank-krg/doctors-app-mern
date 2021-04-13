const mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

var user = mongoose.model("User", UserSchema);

module.exports = { user };
