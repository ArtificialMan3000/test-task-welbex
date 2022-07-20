import { useState, useEffect } from 'react';
import CONFIG from './config';
import { fetchEntries } from './api/fetchEntries';
import { Table } from './features/table/Table/Table';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [entries, setEntries] = useState(null);

  useEffect(() => {
    fetchEntries()
      .then((res) => {
        setIsLoading(false);
        setEntries(res);
        console.log('entries', res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const heads = CONFIG.entries.fields
    .filter((field) => field.isShown)
    .map((field) => field.string);

  return isLoading ? (
    <p>Идёт загрузка</p>
  ) : (
    <div className="app">
      <Table heads={heads} rows={entries} />
    </div>
  );
}

export default App;
