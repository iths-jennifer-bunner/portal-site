import React from "react";
import "./ErrorsFieldsContainer.scss";

function ErrorsFieldsContainer() {
  return (
    <div>
      <div className="expandedFields">
        <div className="expandedFields__title">ERRORS & WARNINGS</div>
        <div className="expandedFields__gridContainer">
          <div className="expandedFields__firstRow ">Message here....</div>
        </div>
      </div>
    </div>
  );
}

export default ErrorsFieldsContainer;
