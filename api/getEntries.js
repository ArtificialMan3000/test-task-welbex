const getEntries = async (dbClient, { filter, offset, limit } = {}) => {
  filter = filter || [];

  const whereClause = filter.length
    ? filter.reduce((where, filterItem, index) => {
        const and = index < filter.length - 1 ? 'AND' : '';
        return `${where} ${filterItem.name} ${filterItem.sign} ${filterItem.value} ${and}`;
      }, 'WHERE')
    : '';
  const offsetClause = offset ? `OFFSET ${offset}` : '';
  const limitClause = limit ? `LIMIT ${limit}` : '';

  const res = await dbClient.query(
    `SELECT * FROM "task_table" ${whereClause} ${limitClause} ${offsetClause}`
  );
  console.log(res);
  return res;
};

module.exports = { getEntries };
