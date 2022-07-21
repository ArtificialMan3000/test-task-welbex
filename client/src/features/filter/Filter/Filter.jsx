import React, { useState } from 'react';

export const Filter = ({ fields, conditions, onFilter }) => {
  const [filterName, setFilterName] = useState('');
  const [filterCondition, setFilterCondition] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const onChangeName = (evt) => {
    setFilterName(evt.target.value);
    onFilter((prevState) => {
      return { ...prevState, name: evt.target.value };
    });
  };
  const onChangeCondition = (evt) => {
    setFilterCondition(evt.target.value);
    onFilter((prevState) => {
      return { ...prevState, condition: evt.target.value };
    });
  };
  const onChangeValue = (evt) => {
    setFilterValue(evt.target.value);
    onFilter((prevState) => {
      return { ...prevState, value: evt.target.value };
    });
  };

  return (
    <div className="filters">
      <select
        className="filter-name"
        value={filterName}
        onChange={onChangeName}
      >
        <option value="">Без фильтрации</option>
        {fields.map((field) => {
          return (
            <option key={field.name} value={field.name}>
              {field.string}
            </option>
          );
        })}
      </select>

      <select
        className="filter-condition"
        value={filterCondition}
        onChange={onChangeCondition}
      >
        <option value="">-</option>
        {conditions.map((condition) => {
          return (
            <option key={condition.name} value={condition.name}>
              {condition.string}
            </option>
          );
        })}
      </select>

      <input
        className="filter-value"
        value={filterValue}
        onChange={onChangeValue}
      />
    </div>
  );
};
