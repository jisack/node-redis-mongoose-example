const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: String,
  desc: String,
  serial: Number,
  publish_date: Date
});

module.exports = mongoose.model("books", BookSchema);
