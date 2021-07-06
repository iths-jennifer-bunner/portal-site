import React from "react";

import ResultSingleContainer from "../resultsComponent/ResultSingleContainer";
import BreadcrumbComponent from "../BreadcrumbComponent";
// import { TestApiFetching } from "../TestApiFetching";
// import GetSessions from "../GetSessions";
import { Test } from "../Test";
// import GenericInitialState from "../GenericInitialState";
// import TestResultList from "../TestResultList";
// const [{ items, isLoaded, error }, doFetch] = Test();
function Result() {
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
        </ul>{" "}
        <BreadcrumbComponent title="RESULT" />
        {/* <TestResultList /> */}
      </>
    );
  }
  // return (
  //   <div className="result-container">

  //     {/* <ResultSingleContainer /> */}
  //     {/* <GetSessions /> */}
  //     {/* <Test /> */}
  //     {/* <GenericInitialState /> */}
  //     {/* <TestApiFetching /> */}
  //   </div>
  // );
}

export default Result;
