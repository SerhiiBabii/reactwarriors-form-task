import React from "react";

const Select = ({ title, id, value, getNumber, getOption }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{title}</label>
      <select
        className="form-control"
        name={id}
        id={id}
        value={value}
        onChange={getNumber}
      >
        {getOption}
      </select>
    </div>
  );
};

export default Select;