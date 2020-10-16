// index.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");
const { auth, requiresAuth } = require("express-openid-connect");

require("dotenv").config();

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.use(
  auth({
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.AUTH0_CLIENT_ID,
    secret: process.env.SESSION_SECRET,
    authRequired: false,
    auth0Logout: true,
  })
);

/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/user", requiresAuth(), (req, res) => {
  res.render("user", { title: "Profile", userProfile: { nickname: "Auth0" } });
});

/**
 * Server Activation
 */

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
