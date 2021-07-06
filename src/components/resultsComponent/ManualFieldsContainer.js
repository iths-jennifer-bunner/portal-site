import React from "react";
import "./ManualFieldsContainer.scss";

function ManualFieldsContainer(props) {
  return (
    <div>
      <div className="expandedFields">
        <div className="expandedFields__title">MANUAL FIELDS</div>
        <div className="expandedFields__gridContainer">
          <div className="expandedFields__firstRow expandedFields__firstRow--first-name">
            First Name
          </div>
          <div className="expandedFields__firstRow expandedFields__firstRow--second-name">
            Last Name
          </div>
          <div className="expandedFields__firstRow expandedFields__firstRow--dob">
            Date of Birth
          </div>
          <div className="expandedFields__firstRow expandedFields__firstRow--gender">
            Gender
          </div>
          <div className="expandedFields__firstRow expandedFields__firstRow--citizenship">
            Citizenship
          </div>
          <div className="expandedFields__secondRow expandedFields__secondRow--firstNameProp">
            {props.givenNamesEnglish}
          </div>
          <div className="expandedFields__secondRow expandedFields__secondRow--secondNameProp">
            {props.surnameEnglish}
          </div>
          <div className="expandedFields__secondRow expandedFields__secondRow--dobProp">
            {props.dateOfBirth}
          </div>
          <div className="expandedFields__secondRow expandedFields__secondRow--genderProp">
            Female
          </div>
          <div className="expandedFields__secondRow expandedFields__secondRow--citizenshipProp">
            {props.country}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManualFieldsContainer;
