import React from "react";
import Step from "./components/Step";
import { MultiStepContextProvider } from "./components/MultiStepContext";
import StepsHead from "./components/StepsHead";

function MultiStepForm(props) {
  const { defaultActiveItemId, navBarDirection, variant, children } = props;

  const tabData = React.useMemo(() => {
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
    <div className="tabs">
      <MultiStepContextProvider defaultActiveItem={defaultActiveItemId}>
        <div className="tab-nav-wrapper">
          <StepsHead
            variant={variant}
            tabData={tabData}
            direction={navBarDirection}
          />
        </div>
        <div>{children}</div>
      </MultiStepContextProvider>
    </div>
  );
}

MultiStepForm.Step = Step;

export default MultiStepForm;
