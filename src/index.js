"use strict";

const Hapi = require("hapi");
const database = require("./database/mongodb");
const book = require("./modules/book/route");

const init = async () => {
  const server = Hapi.server({
    port: 8000,
    host: "0.0.0.0"
  });

  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Hello World!";
    }
  });

  await database();
  await book(server);
  await server.start();
  console.log("Server running on %ss", server.info.uri);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
