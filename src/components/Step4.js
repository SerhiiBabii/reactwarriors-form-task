import React from "react";

function Step4({
  step,
  firstname,
  lastname,
  email,
  mobile,
  avatar,
  country,
  city
}) {
  return (
    <div
      data-step="4"
      className={step === 4 ? "step-visible container-fluid" : "step-hidden"}
    >
      <div className="row mb-4">
        <div className="col-4">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="col-8 d-flex align-items-center">
          <h4>
            {firstname} {lastname}
          </h4>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-12">
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Mobile:</strong> {mobile}
          </p>
          <p>
            <strong>Location:</strong> {country}, {city}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Step4;
