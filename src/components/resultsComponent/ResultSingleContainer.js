import React, { useState } from "react";
import CollapsedSingleResult from "./CollapsedSingleResult";
import ExpandedSingleResult from "./ExpandedSingleResult";
import "./ResultSingleContainer.scss";
import "../../App.scss";
import DetailsIcon from "@material-ui/icons/Details";
import ChangeHistoryIcon from "@material-ui/icons/ChangeHistory";
// import GetSessions from "../GetSessions";

function ResultSingleContainer(props) {
  const [clickAdvancedSearch, setAdvancedSearch] = useState(true);
  const advancedSearch = () => setAdvancedSearch(!clickAdvancedSearch);

  return (
    <div className="resultPageContainer">
      <div className="resultContainer">
        <div className="result">
          <div className="result__boxes">
            {clickAdvancedSearch ? (
              <CollapsedSingleResult
                fullName={props.fullName}
                sessionStatus={props.sessionStatus}
                docType={props.docType}
                tag={props.tag}
                analysisId={props.analysisId}
              />
            ) : (
              //{/* <CollapsedSingleResult sessions={<GetSessions></GetSessions>} /> */}
              <ExpandedSingleResult
                fullName={props.fullName}
                sessionStatus={props.sessionStatus}
                docType={props.docType}
                tag={props.tag}
                image={props.image}
                givenNamesEnglish={props.givenNamesEnglish}
                surnameEnglish={props.surnameEnglish}
                dateOfBirth={props.dateOfBirth}
                country={props.country}
              />
            )}
          </div>
          <div className="result__buttonContainer" onClick={advancedSearch}>
            <button className="result__expandButton">
              {clickAdvancedSearch ? "Expand" : "Close"}
              {clickAdvancedSearch ? (
                <DetailsIcon style={{ color: "#01394e", padding: "0 .5rem" }} />
              ) : (
                <ChangeHistoryIcon
                  style={{ color: "#01394e", padding: "0 .5rem" }}
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultSingleContainer;
