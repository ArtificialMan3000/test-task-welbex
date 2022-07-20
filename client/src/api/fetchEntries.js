import CONFIG from '../config';
import { fetchJson } from './fetchJson';

const template = [
  {
    key: '1',
    cells: {
      date: '2011-03-11T21:00:00.000Z',
      name: 'Name 1',
      amount: 12,
      distance: 1000,
    },
  },
];

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

export const fetchEntries = async () => {
  const entries = await fetchJson('/getEntries');
  // console.log('entries', entries);
  return transformEntries(entries);
};
