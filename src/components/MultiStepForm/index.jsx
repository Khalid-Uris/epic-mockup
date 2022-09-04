import React from "react";
import PropTypes from "prop-types";
import Step from "./components/Step";
import { MultiStepContextProvider } from "./components/MultiStepContext";
import StepsHead from "./components/StepsHead";

function MultiStepForm(props) {
  const { defaultActiveStepId, children } = props;

  const stepsHeadData = React.useMemo(() => {
    const data = [];

    React.Children.forEach(children, (child) => {
      if (!React.isValidElement(child)) {
        throw new Error("MultiStepForm children must be vaild react element");
      }

      data.push({
        id: child.props.id,
        title: child.props.title,
        iconLink: child.props.iconLink,
      });
    });

    return data;
  }, [children]);

  return (
    <div className="multi-step-form">
      <MultiStepContextProvider defaultActiveStepId={defaultActiveStepId}>
        <div className="steps-head-wrapper">
          <StepsHead stepsHeadData={stepsHeadData} />
        </div>
        <div>{children}</div>
      </MultiStepContextProvider>
    </div>
  );
}

MultiStepForm.Step = Step;

MultiStepForm.propTypes = {
  defaultActiveStepId: PropTypes.string.isRequired,
};

export default MultiStepForm;
