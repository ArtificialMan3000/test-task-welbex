const express = require('express');
const { connectDB } = require('./db/connection');
require('dotenv').config();

const app = express();
const port = process.env.SERVER_PORT;
connectDB();

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});