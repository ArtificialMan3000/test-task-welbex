const { Client } = require('pg');

const connectDB = async () => {
  const client = new Client();
  await client.connect();
  console.log('connected');
};

module.exports = { connectDB };
