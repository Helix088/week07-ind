const checkLoggedin = (req, res, next) => {
  if (!req.oidc.isAuthenticated()) {
    return res.status(401).send({
      error: "Not authorized to change data without login.",
      login: "https://week07.onrender.com/login",
    });
  }
  next();
};

module.exports = { checkLoggedin };
