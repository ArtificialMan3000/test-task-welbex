import React, { useState } from 'react';

export const Sorting = ({ fields, onSort }) => {
  const [selectedField, setSelectedField] = useState();

  const onChange = (evt) => {
    setSelectedField(evt.target.value);
    onSort(evt.target.value);
  };

  return (
    <select value={selectedField} onChange={onChange}>
      <option value="">Без сортировки</option>
      {fields.map((field) => {
        return (
          <option key={field.name} value={field.name}>
            {field.string}
          </option>
        );
      })}
    </select>
  );
};
