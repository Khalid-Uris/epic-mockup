import React from "react";

const MultiStepContext = React.createContext({
  selectedItemId: null,
  defaultActiveId: null,
  handleSelectItem: () => {},
});

export function MultiStepContextProvider({ defaultActiveItem, children }) {
  const [selectedItem, setSelectedItem] = React.useState(defaultActiveItem);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  const contextValues = React.useMemo(
    () => ({
      selectedItemId: selectedItem,
      defaultActiveId: defaultActiveItem,
      handleSelectItem,
    }),
    [selectedItem, defaultActiveItem]
  );

  return (
    <MultiStepContext.Provider value={contextValues}>
      {children}
    </MultiStepContext.Provider>
  );
}

export function useMultiStep() {
  const { defaultActiveId, selectedItemId, handleSelectItem } =
    React.useContext(MultiStepContext);
  return { defaultActiveId, selectedItemId, setSelectedItem: handleSelectItem };
}

export default MultiStepContext;
