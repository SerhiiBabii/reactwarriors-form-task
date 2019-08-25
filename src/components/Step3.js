import React from "react";

const Step3 = ({ step, avatar, getAvatar, errors }) => {
  return (
    <div data-step="3" className={step === 3 ? "step-visible" : "step-hidden"}>
      <img
        className="mb-4 step4__img"
        src={avatar ? avatar : "./default-avater.jpg"}
        alt="avatar"
      />
      <div className="mb-4">
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="avatar"
            name="avatar"
            onChange={getAvatar}
          />
          <label className="custom-file-label" htmlFor="customFile">
            Choose avatar
          </label>
          {errors.avatar ? (
            <div className="invalid-feedback">{errors.avatar}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Step3;
