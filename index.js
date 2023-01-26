const createError = require("http-errors");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongodb = require("./db/connect");


const port = process.env.PORT || 8080;
const app = express();

const { auth, requiresAuth } = require("express-openid-connect");

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: "a long, randomly-generated string stored in env",
  baseURL: "http://localhost:8080",
  clientID: "0QA1mpv1EgePfKWy95324evYlxJVzJqc",
  issuerBaseURL: "https://dev-qt3fex4vdfmb5dpl.us.auth0.com",
};


app
  .use(express.json())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}))
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use(cors())
  .use("/", require("./routes"));

process.on("uncaughtException", (err, origin) => {
  console.log(
    process.stderr.fd,
    `Caught exception: ${err}\n` + `Exception origin: ${origin}`
  );
});

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.get("/profile", requiresAuth(), (req, res) => {
  console.log(JSON.stringify(req.oidc.user));
  res.send(JSON.stringify(req.oidc.user));
});