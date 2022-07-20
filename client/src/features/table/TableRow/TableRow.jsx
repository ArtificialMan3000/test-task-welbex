import React from 'react';
import { TableCell } from '../TableCell/TableCell';

export const TableRow = ({ cells }) => {
  return (
    <div className="table-row">
      {cells.map((cell) => (
        <TableCell key={cell.name}>{cell.value}</TableCell>
      ))}
    </div>
  );
};
