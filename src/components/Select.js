import React from "react";

const Select = ({ title, id, value, getNumber, getOption, errors }) => {
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
      {errors ? <div className="invalid-feedback">{errors}</div> : null}
    </div>
  );
};

export default Select;
