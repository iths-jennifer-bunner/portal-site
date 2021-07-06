import React from "react";
import "../resultsComponent/CollapsedSingleResult.scss";
import CloseIcon from "@material-ui/icons/Close";
import "../../App.scss";

function CollapsedSingleResult(props) {
  return (
    <>
      {/* {props.getSessions} */}
      <div className="collapsedContainer">
        <div className="collapsedContainer__nameRow">
          <div className="collapsedContainer__leftDiv">
            <p className="collapsedContainer__leftDiv--name">
              {props.fullName}
            </p>
          </div>
          <div className="collapsedContainer__rightDiv">
            <p className="collapsedContainer__rightDiv--relayState">
              Tag:&nbsp; {props.tag}
            </p>
            <p className="collapsedContainer__rightDiv--timeDate">
              16:38 2021-02-25
            </p>
            <p className="collapsedContainer__rightDiv--id">
              {props.analysisId}
            </p>
          </div>
        </div>
        <div className="status">
          <div className="status__button">
            <p className={`status__button--${props.sessionStatus}`}>
              {props.sessionStatus}
            </p>
          </div>
          <div className="status__iconsBar">
            <div className="status__iconsBar">
              <div className={`status__circle--${props.sessionStatus}`}>
                <CloseIcon fontSize="small" style={{ color: "white" }} />
              </div>
              <p className="status__circle--text">Basic Data</p>
            </div>
            <div className="status__iconsBar">
              <div className={`status__circle--${props.sessionStatus}`}>
                <CloseIcon fontSize="small" style={{ color: "white" }} />
              </div>
              <p className="status__circle--text">{props.docType}</p>
            </div>
            <div className="status__iconsBar">
              <div className={`status__circle--${props.sessionStatus}`}>
                <CloseIcon fontSize="small" style={{ color: "white" }} />
              </div>
              <p className="status__circle--text">Photo</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CollapsedSingleResult;
