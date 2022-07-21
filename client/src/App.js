import { useState, useEffect } from 'react';
import CONFIG from './config';
import { fetchEntries } from './api/fetchEntries';
import { Table } from './features/table/Table/Table';
import { Sorting } from './features/filter/Sorting/Sorting';
import { Filter } from './features/filter/Filter/Filter';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [entries, setEntries] = useState(null);
  const [sortBy, setSortBy] = useState('');
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    fetchEntries({ sortBy, filter })
      .then((res) => {
        setIsLoading(false);
        setEntries(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [sortBy, filter]);

  const heads = CONFIG.entries.fields
    .filter((field) => field.isShown)
    .map((field) => field.string);

  const sortFields = CONFIG.entries.fields
    .filter((field) => field.isSortedBy)
    .map((field) => ({ name: field.name, string: field.string }));

  const filterFields = CONFIG.entries.fields
    .filter((field) => field.isFilteredBy)
    .map((field) => ({ name: field.name, string: field.string }));

  const filterConditions = CONFIG.conditions;

  return isLoading ? (
    <p>Идёт загрузка</p>
  ) : (
    <div className="app">
      <div className="filter-wrapper">
        <Sorting fields={sortFields} onSort={setSortBy} />
        <Filter
          fields={filterFields}
          conditions={filterConditions}
          onFilter={setFilter}
        />
      </div>
      <div className="table-wrapper">
        <Table heads={heads} rows={entries} />
      </div>
    </div>
  );
}

export default App;
