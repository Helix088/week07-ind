const checkLoggedin = (req, res, next) => {
  console.log("hello I'm gonna kill myself")
  if (!req.oidc.isAuthenticated()) {
    return res.status(401).send({
      error: "Not authorized to change data without login.",
      login: "https://week07.onrender.com/login",
    });
  }
  next();
};

module.exports = { checkLoggedin };
