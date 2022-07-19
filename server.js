require('dotenv').config();
const express = require('express');
const { connectDB } = require('./db/connection');
const { setRoutes } = require('./routes');

const app = express();
const port = process.env.SERVER_PORT;

connectDB().then((dbClient) => {
  app.listen(port, () => console.log(`Listening on port ${port}`));

  setRoutes(app, dbClient);
});
