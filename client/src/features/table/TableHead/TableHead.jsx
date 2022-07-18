import React from 'react';
import { TableCell } from '../TableCell/TableCell';

export const TableHead = () => {
  return (
    <div className="table-head">
      <TableCell>Дата</TableCell>
      <TableCell>Название</TableCell>
      <TableCell>Количество</TableCell>
      <TableCell>Расстояние</TableCell>
    </div>
  );
};
