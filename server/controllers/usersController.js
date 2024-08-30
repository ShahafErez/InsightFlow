exports.getCurrentUser = (req, res, next) => {
  try {
    // console.log(req.user);
    return res.status(200).send(req.user);
  } catch (error) {
    next(error);
  }
};

exports.register = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const userId = await register(username, password);
    req.session.userId = userId;
    res
      .status(201)
      .json({ message: `User ${username} registered successfully.` });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const userId = await login(username, password);
    req.session.userId = userId;
    res
      .status(200)
      .json({ message: `'User ${username} logged in successfully.'` });
  } catch (error) {
    next(error);
  }
};

exports.logoutUser = (req, res, next) => {
  try {
    req.logout();
    return res.status(200).json({ message: "Logged out successfully." });
  } catch (error) {
    next(error);
  }
};
