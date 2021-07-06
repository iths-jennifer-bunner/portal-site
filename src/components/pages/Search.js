import React from "react";
// import SearchComponent from "../SearchComponent";
import BreadcrumbComponent from "../BreadcrumbComponent";
import { Test } from "../Test";

function Search() {
  return (
    <div>
      <BreadcrumbComponent title="SEARCH" />
      {/* <SearchComponent /> */}
      <Test />
    </div>
  );
}

export default Search;
