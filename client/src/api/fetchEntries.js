import CONFIG from '../config';
import { fetchJson } from './fetchJson';

const transformEntries = (entries) => {
  const fields = CONFIG.entries.fields;

  const shownFields = fields.filter((field) => field.isShown);
  const keyField = fields.find((field) => field.isKey).name;

  return entries.map((entry) => {
    const cells = shownFields.map((field) => {
      const cellName = field.name;
      const cellValue = entry[cellName];
      return { name: cellName, value: cellValue };
    });

    return {
      key: entry[keyField],
      cells,
    };
  });
};

export const fetchEntries = async ({ sortBy, filter }) => {
  const filterParams =
    filter && filter.name && filter.condition && filter.value
      ? `filter=${filter.name};${filter.condition};${filter.value}`
      : '';
  const sortParam = sortBy ? `sort=${sortBy}` : '';
  const entries = await fetchJson(
    CONFIG.endpoints.entries.get + `?${filterParams}&${sortParam}`
  );
  return transformEntries(entries);
};
