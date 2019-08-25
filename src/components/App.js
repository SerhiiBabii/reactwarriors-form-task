import React, { Component } from "react";
import Steps from "./Steps";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      step: 1,
      steps: [
        {
          marker: 1,
          title: "Basic",
          activeClass: false,
          completedClass: true
        },
        {
          marker: 2,
          title: "Contacts",
          activeClass: true,
          completedClass: false
        },
        {
          marker: 3,
          title: "Avatar",
          activeClass: false,
          completedClass: false
        },
        {
          marker: 4,
          title: "Finish",
          activeClass: false,
          completedClass: false
        }
      ],
      firstname: "",
      lastname: "",
      password: "",
      repeatPassword: "",
      gender: "male",
      email: "",
      mobile: "",
      countryId: 1,
      country: "Ukraine",
      city: "",
      cityId: "",
      avatar: "",
      errors: {
        firstname: "",
        lastname: "",
        password: "",
        repeatPassword: "",
        email: "",
        mobile: "",
        city: "",
        avatar: ""
      }
    };
  }

  changedInput = e => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // currentStep = (step, steps) => {
  //   this.setState(()=>{

  //   }))
  // }

  nextStep = e => {
    e.preventDefault();
    const errors = {};
    switch (this.state.step) {
      case 1: {
        if (this.state.firstname.length < 5) {
          errors.firstname = "Must be 5 characters or more";
        }
        if (this.state.lastname.length < 5) {
          errors.lastname = "Must be 5 characters or more";
        }
        if (this.state.password.length < 6) {
          errors.password = "Must be 6 characters or more";
        }
        if (this.state.password !== this.state.repeatPassword) {
          errors.repeatPassword = "Must be equal password";
        }
        break;
      }
      case 2: {
        if (this.state.email.length < 5 /*RegExp*/) {
          errors.email = "Invalid email address";
        }
        if (this.state.mobile.length < 5 /*RegExp*/) {
          errors.mobile = "Invalid mobile";
        }
        if (!this.state.city && this.state.city !== "Select city") {
          errors.city = "Required";
        }
        break;
      }
      case 3: {
        if (!this.state.avatar) {
          errors.avatar = "Required";
        }
        break;
      }
      default:
        console.log("default");
    }

    if (Object.keys(errors).length > 0) {
      this.setState({
        errors: errors
      });
    } else {
      this.setState({
        step: +this.state.step + 1
      });
    }
  };

  prevStep = e => {
    e.preventDefault();
    if (this.state.step > 1) {
      this.setState({
        step: +this.state.step - 1
      });
    }
  };

  resetButton = e => {
    e.preventDefault();
    this.setState({
      step: 1,
      values: {}
    });
  };

  getNumber = e => {
    this.setState({
      [e.target.name]: e.target.options[e.target.selectedIndex].text,
      countryId: e.target.value
    });
  };

  getNumberCity = e => {
    this.setState({
      [e.target.name]: e.target.options[e.target.selectedIndex].text,
      cityId: e.target.value
    });
  };

  getAvatar = e => {
    const reader = new FileReader();
    reader.onloadend = e => {
      this.setState({
        avatar: e.target.result
      });
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  render() {
    const {
      step,
      steps,
      firstname,
      lastname,
      password,
      repeatPassword,
      gender,
      email,
      mobile,
      currentCities,
      country,
      city,
      countryId,
      avatar,
      errors
    } = this.state;
    return (
      <div className="form-container card card-body">
        <Steps step={step} steps={steps} />
        <form className="form" action="">
          <Step1
            step={step}
            firstname={firstname}
            lastname={lastname}
            password={password}
            repeatPassword={repeatPassword}
            gender={gender}
            errors={errors}
            changedInput={this.changedInput}
          />

          <Step2
            step={step}
            email={email}
            mobile={mobile}
            countryId={countryId}
            country={country}
            currentCities={currentCities}
            errors={errors}
            changedInput={this.changedInput}
            getNumber={this.getNumber}
            getNumberCity={this.getNumberCity}
          />

          <Step3
            step={step}
            avatar={avatar}
            errors={errors}
            getAvatar={this.getAvatar}
            changedInput={this.changedInput}
          />

          <Step4
            step={step}
            firstname={firstname}
            lastname={lastname}
            email={email}
            mobile={mobile}
            avatar={avatar}
            country={country}
            city={city}
          />

          <div
            className={
              step === 4 ? "step-hidden" : "d-flex justify-content-center"
            }
          >
            <button
              type="button"
              className="btn btn-light mr-4"
              onClick={this.prevStep}
              disabled={step === 1}
            >
              Previous
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.nextStep}
            >
              Next
            </button>
          </div>
          <div
            className={
              step === 4 ? "d-flex justify-content-center" : "step-hidden"
            }
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.resetButton}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}
