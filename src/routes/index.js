const RootRoute = require("./RootRoute");

function routes(app) {
  app.use("/", RootRoute);
}

module.exports = routes;
