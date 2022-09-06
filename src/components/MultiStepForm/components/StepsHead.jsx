import React from "react";
import StepsHeadItem from "./StepsHeadItem";
import TabContext from "./MultiStepContext";

function StepsHead(props) {
  const { stepsHeadData } = props;
  const context = React.useContext(TabContext);

  if (!context) {
    throw new Error(
      "StepsHead component must be defined as child of Tabs component"
    );
  }

  return (
    <ul className="steps-head" role="tablist">
      {stepsHeadData.map((item, index) => (
        <>
          <StepsHeadItem
            key={item.id}
            id={item.id}
            totalSteps={stepsHeadData?.length}
            stepNumber={index + 1}
            title={item.title}
            iconLink={item.iconLink}
            activeStepId={context.activeStepId}
            onSelect={context.handleSelectItem}
          />
        </>
      ))}
    </ul>
  );
}

export default StepsHead;
