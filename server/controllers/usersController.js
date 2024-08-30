const userService = require("../services/userService");

exports.logout = (req, res, next) => {
  try {
    req.logout();
    return res.status(200).json({ message: "Logged out successfully." });
  } catch (error) {
    next(error);
  }
};

exports.getCurrentUser = (req, res, next) => {
  try {
    return res.status(200).send(req.user);
  } catch (error) {
    next(error);
  }
};

exports.register = async (req, res, next) => {
  try {
    const user = await userService.register(req.body);
    req.session.user = user;
    req.user = user;
    res.status(201).json({ message: "Registered successfully." });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = await userService.login(req.body);
    req.session.user = user;
    req.user = user;
    console.log("???", req.user);
    console.log("userId", user);

    res.status(200).json({ message: "Logged in successfully." });
  } catch (error) {
    next(error);
  }
};
