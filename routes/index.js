const { setGetEntriesRoute } = require('./getEntries');

const setRoutes = (app, dbClient) => {
  setGetEntriesRoute(app, dbClient);
};

module.exports = { setRoutes };
