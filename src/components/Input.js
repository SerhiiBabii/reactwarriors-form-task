import React from "react";

const Input = ({
  title,
  name,
  id,
  type,
  placeholder,
  value,
  changedInput,
  errors
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{title}</label>
      <input
        className="form-control"
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={changedInput}
      />
      {errors ? <div className="invalid-feedback">{errors}</div> : null}
    </div>
  );
};

export default Input;
