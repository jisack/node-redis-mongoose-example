const redisClient = require("async-redis").createClient;

const redis = redisClient(6379, "redis");

redis.on("error", err => {
  console.log("redis connection fail:", err);
});

redis.on("connect", () => {
  console.log("redis is connected .");
});

module.exports = redis;
