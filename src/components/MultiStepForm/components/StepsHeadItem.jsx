import React from "react";
import { FiImage } from "react-icons/fi";

function StepHeadItem(props) {
  const { id, title, activeStepId, totalSteps, stepNumber, onSelect } = props;

  const handleClick = () => {
    onSelect(id);
  };

  const isSelected = id === activeStepId;

  return (
    <React.Fragment>
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
          <div>
            <FiImage size={40} />
          </div>
          <p>{title}</p>
        </button>
      </li>
      {totalSteps !== stepNumber && <li className="head-items-separator" />}
    </React.Fragment>
  );
}

export default StepHeadItem;
