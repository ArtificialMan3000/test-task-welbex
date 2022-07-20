import { fetchJson } from './fetchJson';

export const fetchFields = async () => {
  const fields = fetchJson('/getFields');

  return fields;
};
