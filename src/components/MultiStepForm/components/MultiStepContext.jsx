import React from "react";

const MultiStepContext = React.createContext({
  activeStepId: null,
  defaultActiveStepId: null,
  handleSelectItem: () => {},
});

export function MultiStepContextProvider({ defaultActiveStepId, children }) {
  const [activeStep, setActiveStep] = React.useState(defaultActiveStepId);

  const handleSelectItem = (item) => {
    setActiveStep(item);
  };

  const contextValues = React.useMemo(
    () => ({
      activeStepId: activeStep,
      defaultActiveStepId: defaultActiveStepId,
      handleSelectItem,
    }),
    [activeStep, defaultActiveStepId]
  );

  return (
    <MultiStepContext.Provider value={contextValues}>
      {children}
    </MultiStepContext.Provider>
  );
}

export function useMultiStep() {
  const { defaultActiveStepId, activeStepId, handleSelectItem } =
    React.useContext(MultiStepContext);
  return { defaultActiveStepId, activeStepId, setActiveStep: handleSelectItem };
}

export default MultiStepContext;
