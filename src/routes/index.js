const RootRoute = require("./RootRoute");
const RealtimeRoute = require("./RealtimeRoute");

function routes(app) {
  app.use("/", RootRoute);
  app.use("/realtime", RealtimeRoute);
}

module.exports = routes;
