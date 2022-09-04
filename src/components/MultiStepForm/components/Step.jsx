import React from "react";
import PropTypes from "prop-types";
import MultiStepContext from "./MultiStepContext";

function Step(props) {
  const context = React.useContext(MultiStepContext);

  if (!context) {
    throw new Error(
      "Step component must be defined as child of MultiStepForm component"
    );
  }

  const { activeStepId } = context;
  const { id, children } = props;

  const isSelected = activeStepId === id;

  return (
    <div
      style={{ display: isSelected ? "block" : "none" }}
      className="step-content"
    >
      {children}
    </div>
  );
}

Step.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  iconLink: PropTypes.string,
};

Step.defaultProps = {
  iconLink: null,
};

export default Step;
