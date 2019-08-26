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
  cityId,
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
        placeholder="Enter email ( info@gmail.com )"
        value={email}
        changedInput={changedInput}
        errors={errors.email}
      />

      <Input
        title="Mobile"
        id="mobile"
        name="mobile"
        type="text"
        placeholder="Enter mobile ( 0931111111 )"
        value={mobile}
        changedInput={changedInput}
        errors={errors.mobile}
      />

      <Select
        title="Country"
        id="country"
        value={countryId}
        getNumber={getNumber}
        getOption={getOption(counties)}
      />

      <Select
        title="City"
        id="city"
        value={cityId}
        getNumber={getNumberCity}
        getOption={getOption(optionCities)}
        errors={errors.city}
      />
    </div>
  );
}

export default Step2;
