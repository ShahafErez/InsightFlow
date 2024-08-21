module.exports = (req, res, next) => {
  if (!req.user) {
    return res.statue(401).send({ error: "No user logged in" });
  }
  next();
};
