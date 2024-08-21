const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/auth/google"], // TODO- CHECK, video 87
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
