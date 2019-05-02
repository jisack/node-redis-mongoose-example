const mongoose = require("mongoose");

module.exports = async () => {
  const dbOptions = {
    useNewUrlParser: true
  };

  const URI = `mongodb://mongo:27017/redis-book`;

  mongoose.connect(URI, dbOptions);

  mongoose.set("debug", true);

  mongoose.connection.on(
    "error",
    console.error.bind(console, "connection error:")
  );
  mongoose.connection.once("open", () => {
    console.log("mongodb has been connected .");
  });
  await mongoose.connection.startSession();
};
