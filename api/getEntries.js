const getEntries = async (dbClient, { filter, offset, limit, order } = {}) => {
  const whereClause = filter?.length
    ? filter.reduce((where, filterItem, index) => {
        const and = index < filter.length - 1 ? 'AND' : '';
        return `${where} ${filterItem.name} ${filterItem.sign} ${filterItem.value} ${and}`;
      }, 'WHERE')
    : '';
  const offsetClause = offset ? `OFFSET ${offset}` : '';
  const limitClause = limit ? `LIMIT ${limit}` : '';
  const orderClause = order ? `ORDER BY ${order.name} ${order.direction}` : '';

  const queryString = `SELECT * FROM "task_table" ${whereClause} ${limitClause} ${offsetClause} ${orderClause}`;
  console.log(queryString);

  const res = await dbClient.query(queryString);
  // console.log(res);
  return res;
};;

module.exports = { getEntries };
