const { getEntries } = require('../api/getEntries');

const setGetEntriesRoute = (app, dbClient) => {
  app.get('/getEntries', async (req, res) => {
    const result = await getEntries(dbClient);
    res.send({ express: result });
  });
};

module.exports = { setGetEntriesRoute };
