import React from "react";
import Input from "./Input";

const Step1 = ({
  step,
  firstname,
  lastname,
  password,
  repeatPassword,
  gender,
  changedInput,
  errors
}) => {
  console.dir(gender);
  return (
    <div data-step="1" className={step === 1 ? "step-visible" : "step-hidden"}>
      {/* <div className="form-group">
        <label htmlFor="firstname">Firstname</label>
        <input
          className="form-control"
          id="firstname"
          type="text"
          name="firstname"
          placeholder="Enter first name"
          value={firstname}
          onChange={changedInput}
        />
        {errors.firstname ? (
          <div className="invalid-feedback">{errors.firstname}</div>
        ) : null}
      </div> */}
      <Input
        title="Firstname"
        id="firstname"
        name="firstname"
        type="text"
        placeholder="Enter first name"
        value={firstname}
        changedInput={changedInput}
        errors={errors}
      />
      <Input
        title="Firstname"
        id="lastname"
        name="lastname"
        type="text"
        placeholder="Enter last name"
        value={lastname}
        changedInput={changedInput}
        errors={errors}
      />
      {/* <div className="form-group">
        <label htmlFor="lastname">Lastname</label>
        <input
          className="form-control"
          id="lastname"
          type="text"
          name="lastname"
          placeholder="Enter last name"
          value={lastname}
          onChange={changedInput}
        />
        {errors.lastname ? (
          <div className="invalid-feedback">{errors.lastname}</div>
        ) : null}
      </div> */}
      <Input
        title="Password"
        id="password"
        name="password"
        type="password"
        placeholder="Enter password"
        value={password}
        changedInput={changedInput}
        errors={errors}
      />
      {/* <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          id="password"
          type="password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={changedInput}
        />
        {errors.password ? (
          <div className="invalid-feedback">{errors.password}</div>
        ) : null}
      </div> */}
      <Input
        title="Repeat password"
        name="repeatPassword"
        id="repeatpassword"
        type="password"
        placeholder="Enter repeat password"
        value={repeatPassword}
        changedInput={changedInput}
        errors={errors}
      />
      {/* <div className="form-group">
        <label htmlFor="repeatpassword">Repeat password</label>
        <input
          className="form-control"
          id="repeatpassword"
          type="password"
          name="repeatPassword"
          placeholder="Enter repeat password"
          value={repeatPassword}
          onChange={changedInput}
        />
        {errors.repeatPassword ? (
          <div className="invalid-feedback">{errors.repeatPassword}</div>
        ) : null}
      </div> */}
      <fieldset className="form-group">
        <div>Gender</div>
        <div className="form-check">
          <input
            id="male"
            name="gender"
            className="form-check-input"
            type="radio"
            value="male"
            checked={gender === "male"}
            onChange={changedInput}
          />
          <label htmlFor="male">Male</label>
        </div>
        <div className="form-check">
          <input
            id="female"
            name="gender"
            className="form-check-input"
            type="radio"
            value="female"
            checked={gender === "female"}
            onChange={changedInput}
          />
          <label htmlFor="female">Female</label>
        </div>
      </fieldset>
    </div>
  );
};

export default Step1;
