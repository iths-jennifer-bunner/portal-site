import React from "react";
import "./DocumentFieldsContainer.scss";

function DocumentFieldsContainer() {
  return (
    <div>
      <div className="expandedFields">
        <div className="expandedFields__title">DOCUMENTS OCR/MRZ</div>
        <div className="expandedFields__gridContainer">
          <div className="expandedFields__firstRow expandedFields__firstRow--first-name">
            Document Number
          </div>
          <div className="expandedFields__firstRow expandedFields__firstRow--second-name">
            Doc. Type Number
          </div>
          <div className="expandedFields__firstRow expandedFields__firstRow--dob">
            Country Code
          </div>
          <div className="expandedFields__firstRow expandedFields__firstRow--gender">
            Date of Issue
          </div>
          <div className="expandedFields__firstRow expandedFields__firstRow--citizenship">
            Date of Expiry
          </div>
          <div className="expandedFields__secondRow expandedFields__secondRow--firstNameProp">
            Jennifer
          </div>
          <div className="expandedFields__secondRow expandedFields__secondRow--secondNameProp">
            Bunner
          </div>
          <div className="expandedFields__secondRow expandedFields__secondRow--dobProp">
            810305
          </div>
          <div className="expandedFields__secondRow expandedFields__secondRow--genderProp">
            Female
          </div>
          <div className="expandedFields__secondRow expandedFields__secondRow--citizenshipProp">
            Swedish
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocumentFieldsContainer;
