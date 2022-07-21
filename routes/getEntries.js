const { getEntries } = require('../api/getEntries');

const setGetEntriesRoute = (app, dbClient) => {
  app.get('/getEntries', async (req, res) => {
    let filter = null;
    if (req.query.filter) {
      const filterQuery = req.query.filter.split(';');
      const filterName = filterQuery[0];
      const filterCondition = filterQuery[1];
      const filterValue = filterQuery[2];
      if (filterName && filterCondition && filterValue) {
        filter = {
          name: filterName,
          condition: filterCondition,
          value: filterValue,
        };
      }
    }

    const result = await getEntries(dbClient, {
      filter,
      order: req.query.sort,
    });
    res.send({ express: result });
  });
};

module.exports = { setGetEntriesRoute };
