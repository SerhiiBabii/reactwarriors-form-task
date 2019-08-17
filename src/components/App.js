import React, { Component } from "react";
import counties from "../data/countries";
import cities from "../data/cities";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      firstname: "",
      lastname: "",
      password: "",
      repeatPassword: "",
      gender: "male",
      disableBtn: false,
      countryId: 1,
      countryName: "Ukraine"
    };
  }

  changedInput = e => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  getOptionItems = items => {
    return items.map(item => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ));
  };

  render() {
    const {
      firstname,
      lastname,
      password,
      repeatPassword,
      gender
    } = this.state;
    return (
      <div className="form-container card">
        <div className="steps mb-4">
          <div className="step">
            <p>1</p>
            <p>Basic</p>
          </div>
          <div className="step">
            <p>2</p>
            <p>Contacts</p>
          </div>
          <div className="step">
            <p>3</p>
            <p>Avatar</p>
          </div>
          <div className="step">
            <p>4</p>
            <p>Finish</p>
          </div>
        </div>
        <form className="form card-body" action="">
          <div className="form-group">
            <label htmlFor="firstname" />
            <input
              className="form-control"
              id="firstname"
              type="text"
              name="firstname"
              placeholder="Enter first name"
              value={firstname}
              onChange={this.changedInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname" />
            <input
              className="form-control"
              id="lastname"
              type="text"
              name="lastname"
              placeholder="Enter last name"
              value={lastname}
              onChange={this.changedInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" />
            <input
              className="form-control"
              id="password"
              type="text"
              name="password"
              placeholder="Enter password"
              value={password}
              onChange={this.changedInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="repeatpassword" />
            <input
              className="form-control"
              id="repeatpassword"
              type="text"
              name="repeatPassword"
              placeholder="Enter repeat password"
              value={repeatPassword}
              onChange={this.changedInput}
            />
          </div>
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
                onChange={this.changedInput}
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
                onChange={this.changedInput}
              />
              <label htmlFor="female">Female</label>
            </div>
          </fieldset>
          <div className="form-group">
            <label htmlFor="county" />
            <select name="county" id="county">
              {this.getOptionItems(counties)}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="city" />
            <select name="city" id="city" />
          </div>
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-light mr-4">
              Previous
            </button>
            <button type="button" className="btn btn-secondary">
              Next
            </button>
          </div>
        </form>
      </div>
    );
  }
}
