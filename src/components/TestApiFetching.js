import { useEffect, useState } from "react";
import { getToken } from "../utils/Common";
// import ResultSingleContainer from "./resultsComponent/ResultSingleContainer";

export const usePortalApi = () => {
  const [items, setItems] = useState([]); //data, setData
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // const [query, setQuery] = useState("bunner");
  // const [queryOne, setQueryOne] = useState("lastName");

  const [url, setUrl] = useState(
    // `https://portal-dev.zignsec.com/api/scanning/merchants/14340/transactions?${queryOne}=${query}&sessionId=&dateFilter.startDate=2021-01-01T22%3A00%3A00.000Z&dateFilter.endDate=2021-04-30T21%3A00%3A00.000Z&pageFilter.skip=0&pageFilter.take=100`
    `https://portal-dev.zignsec.com/api/scanning/merchants/14340/transactions?lastName=bunner&sessionId=&dateFilter.startDate=2021-01-01T22%3A00%3A00.000Z&dateFilter.endDate=2021-04-30T21%3A00%3A00.000Z&pageFilter.skip=0&pageFilter.take=100`
  );

  useEffect(() => {
    const token = getToken();
    fetch(
      url,
      // `https://portal-dev.zignsec.com/api/scanning/merchants/14340/transactions?lastName=${query}&sessionId=&dateFilter.startDate=2021-01-01T22%3A00%3A00.000Z&dateFilter.endDate=2021-04-30T21%3A00%3A00.000Z&pageFilter.skip=0&pageFilter.take=100`,
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
  }, [url]);
  console.log("fetch körs på TestApiFetching");

  return [{ items, isLoaded, error }, setUrl];
};

// export const TestApiFetching = () => {
//   const [{ items, isLoaded, error }] = usePortalApi();
//   if (error) {
//     return <div>Error: {error.message}</div>;
//   } else if (!isLoaded) {
//     return <div>Loading...</div>;
//   } else {
//     return (
//       <div className="getSessions-container">
//         <ul className="getSessions">
//           {items.map((item) => (
//             <li key={item.id}>
//               <ResultSingleContainer
//                 docType={item.documentTypeName}
//                 sessionStatus={item.sessionStatus}
//                 fullName={item.fullName}
//                 tag={item.relayState}
//                 image={item.fileNames}
//                 analysisId={item.analysisId}
//                 givenNamesEnglish={item.givenNamesEnglish}
//                 surnameEnglish={item.surnameEnglish}
//                 dateOfBirth={item.dateOfBirth}
//                 country={item.country}
//               />
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// };
// return <div></div>;
// }

// export default TestApiFetching;
