const getEntries = async (dbClient, { filter, offset, limit, order } = {}) => {
  // const whereClause = filter?.length
  //   ? filter.reduce((where, filterItem, index) => {
  //       const and = index < filter.length - 1 ? 'AND' : '';
  //       return `${where} ${filterItem.name} ${filterItem.condition} ${filterItem.value} ${and}`;
  //     }, 'WHERE')
  //   : '';
  const conditions = { equals: '=', more: '>', less: '<' };

  const whereClause = filter
    ? `WHERE ${filter.name} ${conditions[filter.condition]} ${filter.value}`
    : '';
  const offsetClause = offset ? `OFFSET ${offset}` : '';
  const limitClause = limit ? `LIMIT ${limit}` : '';
  const orderClause = order ? `ORDER BY ${order} ASC` : '';

  const queryString = `SELECT * FROM "task_table" ${whereClause} ${limitClause} ${offsetClause} ${orderClause}`;
  console.log('Query:', queryString);

  const res = await dbClient.query(queryString);
  return res;
};;

module.exports = { getEntries };
