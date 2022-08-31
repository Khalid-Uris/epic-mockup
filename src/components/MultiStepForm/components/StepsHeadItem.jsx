import React from "react";

function StepHeadItem(props) {
  const { id, title, selectedItemId, onSelect } = props;

  const handleClick = () => {
    onSelect(id);
  };

  const isSelected = id === selectedItemId;

  return (
    <li
      className={`step-item ${isSelected ? "active" : ""}`}
      role="presentation"
    >
      <button
        role="tab"
        className="step-link"
        aria-selected={isSelected}
        onClick={handleClick}
        type="button"
      >
        {title}
      </button>
    </li>
  );
}

export default StepHeadItem;
