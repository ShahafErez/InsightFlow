// const bcrypt = require("bcrypt");
// const {
//   ResourceAlreadyExists,
//   NotFound,
//   BadUserInput,
// } = require("../utils/CustomErrors");
// const User = mongoose.model("users");

// /**
//  * Registering a new user and saving it to the database
//  */
// async function register(username, password) {
//   if (!username || !password || password.length < 6) {
//     throw new BadUserInput("Invalid username or password.");
//   }

//   try {
//     // Check if the username already exists
//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//       throw new ResourceAlreadyExists("Username already exists.");
//     }

//     // Create a new user
//     const user = new User({
//       username: username,
//       password: await hashPassword(password),
//     });

//     await user.save();
//     return user._id;
//   } catch (error) {
//     throw error;
//   }
// }

// /**
//  * Hashing the user's password for secured storage
//  */
// async function hashPassword(userPassword) {
//   const saltRounds = 10;
//   try {
//     const salt = await bcrypt.genSalt(saltRounds);
//     return await bcrypt.hash(userPassword, salt);
//   } catch (error) {
//     console.error("Error during password hashing:", error); // Log error details
//     throw new Error("Failed to hash password.");
//   }
// }

// /**
//  * Login the user by checking if the provided username and password are correct
//  */
// async function login(username, userInputPassword) {
//   if (!username || !userInputPassword) {
//     throw new BadUserInput("Username and password are required.");
//   }

//   // Find the user by username
//   const user = await User.findOne({ username });
//   if (!user) {
//     throw new NotFound("User by the given username was not found.");
//   }

//   // Compare the provided password with the hashed password
//   if (!(await bcrypt.compare(userInputPassword, user.password))) {
//     throw new BadUserInput("Password is incorrect");
//   }

//   return user._id;
// }

// module.exports = { register, login };
