const checkLoggedin = (req, res, next) => {
  if (!req.oidc.isAuthenticated()) {
    return res.status(401).send({
      error: "Not authorized to change data without login.",
      login: "http://localhost:8080/login",
    });
  }
  next();
};

module.exports = { checkLoggedin };
