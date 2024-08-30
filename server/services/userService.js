const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = mongoose.model("users");

const {
  ResourceAlreadyExists,
  NotFound,
  BadUserInput,
} = require("../utils/CustomErrors");

/**
 Registering a new user and saving it to the database
 */
async function register({ username, password }) {
  if (!username || !password) {
    throw new BadUserInput("Invalid username or password.");
  }
  try {
    const existingUser = await User.findOne({ username: username });
    if (existingUser) {
      throw new ResourceAlreadyExists("Username already exists.");
    }

    const hashedPassword = await hashPassword(password);
    const user = new User({
      username: username,
      password: hashedPassword,
    });

    await user.save();
    return user._id;
  } catch (error) {
    throw error;
  }
}

/**
 * Hashing the user's password for secured storage
 */
async function hashPassword(userPassword) {
  const saltRounds = 10;
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(userPassword, salt);
  } catch (error) {
    console.error("Error during password hashing:", error); // Log error details
    throw new Error("Failed to hash password.");
  }
}

/**
 * Login the user by checking if the provided username and password are correct using Mongoose
 */
async function login({ username, password: userInputPassword }) {
  if (!username || !userInputPassword) {
    throw new BadUserInput("Username and password are required.");
  }

  const user = await User.findOne({ username: username });
  if (!user) {
    throw new NotFound("User by the given username was not found.");
  }

  const isPasswordCorrect = await bcrypt.compare(
    userInputPassword,
    user.password
  );
  if (!isPasswordCorrect) {
    throw new BadUserInput("Password is incorrect");
  }

  return user;
}

module.exports = { register, login };
