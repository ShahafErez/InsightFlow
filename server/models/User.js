const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  credits: {
    type: Number,
    default: 0,
  },
  username: {
    type: String,
    unique: true,
  },
  password: String,
});

mongoose.model("users", userSchema);
