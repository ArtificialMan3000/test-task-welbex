import React from 'react';
import { TableHead } from '../TableHead/TableHead';
import { TableRow } from '../TableRow/TableRow';

export const Table = ({ heads, rows }) => {
  return (
    <div className="table">
      <TableHead cells={heads} />
      {rows.map((row) => (
        <TableRow key={row.key} cells={row.cells}></TableRow>
      ))}
    </div>
  );
};
