import React from "react";
// import { Test } from "../components/Test";

import { Test } from "../components/Test";
import ResultSingleContainer from "./resultsComponent/ResultSingleContainer";

function TestResultList() {
  // return TestApiFetching;

  const [{ items, isLoaded, error }, doFetch] = Test();

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <ul className="getSessions">
          {items.map((item) => (
            <li key={item.id}>
              <ResultSingleContainer
                docType={item.documentTypeName}
                sessionStatus={item.sessionStatus}
                fullName={item.fullName}
                tag={item.relayState}
                image={item.fileNames}
                analysisId={item.analysisId}
                givenNamesEnglish={item.givenNamesEnglish}
                surnameEnglish={item.surnameEnglish}
                dateOfBirth={item.dateOfBirth}
                country={item.country}
              />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default TestResultList;
