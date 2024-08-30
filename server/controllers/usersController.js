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
