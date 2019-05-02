const { get, create, getWithoutCache } = require("./controller");

module.exports = server => {
  server.route([
    {
      method: "GET",
      path: `/books`,
      handler: get
    },
    {
      method: "POST",
      path: `/books`,
      handler: create
    },
    {
      method: "GET",
      path: `/books/no-cached`,
      handler: getWithoutCache
    }
  ]);
};
