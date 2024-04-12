const mongoose = require("mongoose");

let connection;

/**
 * return the cached mongoDB connection if its defined, else
 * return a new mongoDB connection
 */
const createConnection = async () => {
  connection = connection ?? (await mongoose.connect(process.env.MONGODB_HOSTNAME));
  return connection;
};

module.exports = createConnection;
