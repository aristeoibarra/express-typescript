export default {
  PORT: process.env.PORT || 5000,
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://mongo:27017/express-ts",
  PROD: process.env.TS_NODE_DEV ? false : true,
};
