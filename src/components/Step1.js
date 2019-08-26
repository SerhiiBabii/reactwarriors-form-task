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
  return (
    <div data-step="1" className={step === 1 ? "step-visible" : "step-hidden"}>
      <Input
        title="Firstname"
        id="firstname"
        name="firstname"
        type="text"
        placeholder="Enter first name"
        value={firstname}
        changedInput={changedInput}
        errors={errors.firstname}
      />
      <Input
        title="Firstname"
        id="lastname"
        name="lastname"
        type="text"
        placeholder="Enter last name"
        value={lastname}
        changedInput={changedInput}
        errors={errors.lastname}
      />
      <Input
        title="Password"
        id="password"
        name="password"
        type="password"
        placeholder="Enter password"
        value={password}
        changedInput={changedInput}
        errors={errors.password}
      />
      <Input
        title="Repeat password"
        name="repeatPassword"
        id="repeatpassword"
        type="password"
        placeholder="Enter repeat password"
        value={repeatPassword}
        changedInput={changedInput}
        errors={errors.repeatPassword}
      />
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
