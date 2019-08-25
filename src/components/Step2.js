import React from "react";
import Input from "./Input";
import Select from "./Select";
import counties from "../data/countries";
import cities from "../data/cities";

const getOptionCities = (cities, countryId) => {
  let filterCities = [
    {
      id: "0",
      name: "Select city"
    }
  ];
  Object.keys(cities).forEach(key => {
    if (+cities[key].country === +countryId) {
      filterCities.push({
        id: key,
        name: cities[key].name
      });
    }
  });
  return filterCities;
};

const getOption = items => {
  return items.map(item => (
    <option key={item.id} value={item.id}>
      {item.name}
    </option>
  ));
};

function Step2({
  step,
  email,
  mobile,
  countryId,
  changedInput,
  errors,
  getNumber,
  getNumberCity
}) {
  const optionCities = getOptionCities(cities, countryId);
  return (
    <div data-step="2" className={step === 2 ? "step-visible" : "step-hidden"}>
      <Input
        title="Email"
        id="email"
        name="email"
        type="text"
        placeholder="Enter email"
        value={email}
        changedInput={changedInput}
        errors={errors}
      />
      {/* <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          className="form-control"
          id="email"
          type="text"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={changedInput}
        />
        {errors.email ? (
          <div className="invalid-feedback">{errors.email}</div>
        ) : null}
      </div> */}
      <Input
        title="Mobile"
        id="mobile"
        name="mobile"
        type="text"
        placeholder="Enter mobile"
        value={mobile}
        changedInput={changedInput}
        errors={errors}
      />
      {/* <div className="form-group">
        <label htmlFor="mobile">Mobile</label>
        <input
          className="form-control"
          id="mobile"
          type="text"
          name="mobile"
          placeholder="Enter mobile"
          value={mobile}
          onChange={changedInput}
        />
        {errors.mobile ? (
          <div className="invalid-feedback">{errors.mobile}</div>
        ) : null}
      </div> */}

      {/* <div className="form-group">
        <label htmlFor="country">Country</label>
        <select
          className="form-control"
          name="country"
          id="country"
          value={countryId}
          onChange={getNumber}
        >
          {getOption(counties)}
        </select>
      </div> */}

      <Select
        title="Country"
        id="country"
        value={countryId}
        getNumber={getNumber}
        getOption={getOption(counties)}
      />

      {/* <div className="form-group">
        <label htmlFor="city">City</label>
        <select
          className="form-control"
          name="city"
          id="city"
          onChange={getNumberCity}
        >
          {getOption(optionCities)}
        </select>
      </div> */}

      <Select
        title="City"
        id="city"
        // value={countryId}
        getNumber={getNumberCity}
        getOption={getOption(optionCities)}
      />
    </div>
  );
}

export default Step2;
