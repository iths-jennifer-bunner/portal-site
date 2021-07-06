import React from "react";
import "../resultsComponent/ExpandedSingleResult.scss";
import ImageContainer from "./ImageContainer";
import ManualFieldsContainer from "./ManualFieldsContainer";
import "../../App.scss";
import DocumentFieldsContainer from "./DocumentFieldsContainer";
import ErrorsFieldsContainer from "./ErrorsFieldContainer";

function ExpandedSingleResult(props) {
  return (
    <div className="expandedSingleResultContainer">
      <div className="expandedTopContainer">
        <div className="expandedTopContainer__button">
          <p className="expandedTopContainer__button--status">
            {props.sessionStatus}
          </p>
        </div>
        <div>
          <p className="expandedTopContainer__name"> {props.fullName}</p>
        </div>
        <div>
          <p className="expandedTopContainer__expData">Export Data</p>
        </div>
      </div>
      <div className="expandedSecondContainer">
        <div className="expandedSecondContainer__states">
          <p>Tag:{props.tag}</p>
          <p>Created 16:38 2021-02-25</p>
        </div>
        <hr />
      </div>
      <div className="expandedImgContainer">
        <div className="expandedImgContainer__img">
          <ImageContainer
            imgName="girl"
            imgUrl={"/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg"}
          />
        </div>
        <div className="expandedImgContainer__img">
          <ImageContainer imgName="boy" imgUrl="/images/id-154285_640 1.png" />
        </div>
      </div>
      <div className="expandedFieldsContainer">
        <ManualFieldsContainer
          givenNamesEnglish={props.givenNamesEnglish}
          surnameEnglish={props.surnameEnglish}
          dateOfBirth={props.dateOfBirth}
          country={props.country}
        />
        <DocumentFieldsContainer />
        <ErrorsFieldsContainer />
      </div>
    </div>
  );
}

export default ExpandedSingleResult;
