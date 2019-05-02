const Book = require("../../models/book");
const Boom = require("boom");
const redis = require("../../database/redis");

const get = async (req, h) => {
  let books = await redis.get("books");
  if (!books) {
    books = await Book.find();
    // set expired with redis.set('key', 'value!', 'EX', 10);
    redis.set("books", JSON.stringify(books));
  } else {
    books = JSON.parse(books);
  }
  return { data: books };
};

const create = async (req, h) => {
  const { title, desc } = req.payload;
  const serial = Math.floor(Math.random() * 100000);
  const publish_date = Date.now();
  try {
    await Book.create({ title, serial, desc, publish_date });
    return { message: "success create book." };
  } catch (err) {
    console.log(err);
    return Boom.badImplementation();
  }
};

const getWithoutCache = async (req, h) => {
  books = await Book.find();
  return { data: books };
};

module.exports = {
  get,
  create,
  getWithoutCache
};
