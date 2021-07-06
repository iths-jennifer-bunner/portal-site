import React, { useState, useEffect } from "react";
import { getToken } from "../utils/Common";
// import CollapsedSingleResult from "./resultsComponent/CollapsedSingleResult";
import ResultSingleContainer from "./resultsComponent/ResultSingleContainer";
import "./GetSession.scss";

function GetSessions() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const token = getToken();
    fetch(
      `https://portal-dev.zignsec.com/api/scanning/merchants/14340/transactions?lastName=bunner&sessionId=&dateFilter.startDate=2021-01-01T22%3A00%3A00.000Z&dateFilter.endDate=2021-04-30T21%3A00%3A00.000Z&pageFilter.skip=0&pageFilter.take=100`,
      // `https://portal-dev.zignsec.com/api/scanning/merchants/14340/transactions?lastName=lastname&sessionId=&dateFilter.startDate=2021-01-01T22%3A00%3A00.000Z&dateFilter.endDate=2021-04-30T21%3A00%3A00.000Z&pageFilter.skip=0&pageFilter.take=100`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.items);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  console.log("fetch körs på getsession");
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="getSessions-container">
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
      </div>
    );
  }
}

export default GetSessions;
