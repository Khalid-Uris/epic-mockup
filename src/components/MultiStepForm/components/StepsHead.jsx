import React from "react";
import StepsHeadItem from "./StepsHeadItem";
import TabContext from "./MultiStepContext";

function StepsHead(props) {
  const { stepData } = props;
  const context = React.useContext(TabContext);

  if (!context) {
    throw new Error(
      "StepsHead component must be defined as child of Tabs component"
    );
  }

  return (
    <ul className="step-head" role="tablist">
      {stepData.map((item) => (
        <StepsHeadItem
          key={item.id}
          id={item.id}
          title={item.title}
          iconLink={item.iconLink}
          selectedItemId={context.selectedItemId}
          onSelect={context.handleSelectItem}
        />
      ))}
    </ul>
  );
}

export default StepsHead;
