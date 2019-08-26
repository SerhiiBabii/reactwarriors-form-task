import React from "react";

const Steps = ({ steps }) => {
  return (
    <div className="steps mb-4">
      {steps.map(item => {
        const currentClass =
          "step " +
          (item.activeClass
            ? "is-active"
            : item.completedClass
            ? "is-completed"
            : "");
        return (
          <div key={item.marker} className={currentClass}>
            <p className="step__marker">{item.marker}</p>
            <p className="step__title">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Steps;
