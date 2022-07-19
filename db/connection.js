const { Client } = require('pg');

const connectDB = async () => {
  const client = new Client();
  await client.connect();
  return client;
};

module.exports = { connectDB };
