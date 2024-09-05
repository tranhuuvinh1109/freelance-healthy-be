const RootRoute = require("./RootRoute");
const RealtimeRoute = require("./RealtimeRoute");
const AuthRoute = require("./auth.route");

function routes(app) {
  app.use("/", RootRoute);
  app.use("/realtime", RealtimeRoute);
  app.use("/auth", AuthRoute);
  app.use("/devices", require("./device.route"));
  app.use("/fall-alerts", require("./fallAlert.route"));
  app.use("/heart-rate-readings", require("./heartRateReading.route"));
  app.use("/statistics", require("./statistic.route"));
}

module.exports = routes;
