export const fetchJson = async (endpoint) => {
  const response = await fetch(endpoint);
  const json = await response.json();

  if (response.status !== 200) {
    throw Error(response.status + ' ' + response.statusText);
  }

  const rows = json.express?.rows;
  if (!rows) {
    throw Error('Not valid answer');
  }

  return rows;
};
