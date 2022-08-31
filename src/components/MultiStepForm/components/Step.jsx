/* eslint-disable react/no-unused-prop-types */
import React from "react";
import MultiStepContext from "./MultiStepContext";

function Step(props) {
  const context = React.useContext(MultiStepContext);

  if (!context) {
    throw new Error(
      "Step component must be defined as child of MultiStepForm component"
    );
  }

  const { selectedItemId } = context;
  const { id, children } = props;

  const isSelected = selectedItemId === id;

  return (
    <div
      style={{ display: isSelected ? "block" : "none" }}
      className="step-content"
    >
      {children}
    </div>
  );
}

export default Step;
