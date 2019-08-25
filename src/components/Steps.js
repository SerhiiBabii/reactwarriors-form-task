import React from "react";

const Steps = ({ step, steps, activeClass, completedClass }) => {
  //baseClass: "step", activeClass: "step is-active", completedClass: "step is-completed"
  return (
    <div className="steps mb-4">
      {steps.map(item => {
        // if (item.activeClass) {
        //   currentClass = "step is-active";
        // } else if (item.completedClass) {
        //   currentClass = "step is-completed";
        // } else {
        //   currentClass = "step";
        // }

        const currentClass =
          "step " +
          (activeClass ? "is-active" : completedClass ? "is-completed" : "");
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
