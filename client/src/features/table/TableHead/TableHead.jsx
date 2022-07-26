import React from 'react';
import { TableCell } from '../TableCell/TableCell';

export const TableHead = ({ cells }) => {
  return (
    <div className="table-head">
      {cells.map((cell) => (
        <TableCell key={cell}>{cell}</TableCell>
      ))}
    </div>
  );
};
