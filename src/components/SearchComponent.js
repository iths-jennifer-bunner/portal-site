import React, { useState } from "react";
import "./SearchComponent.scss";
import { getUserName } from "../utils/Common";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import Input from "react-phone-number-input/input";
import validator from "validator";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { useHistory } from "react-router-dom";

// import axios from 'axios';

function SearchComponent() {
  const userName = getUserName();

  const [value, setValue] = useState();
  const validateEmail = (e) => {
    var email = e.target.value;

    validator.isEmail(email);
  };

  const [clickAdvancedSearch, setAdvancedSearch] = useState(false);
  const advancedSearch = () => setAdvancedSearch(!clickAdvancedSearch);

  const [BirthDate, handleBirthDateChange] = useState(null);
  const [FromDate, handleFromDateChange] = useState(null);
  const [ToDate, handleToDateChange] = useState(null);

  const history = useHistory();
  const routeChange = () => {
    let path = `result`;
    history.push(path);
  };

  return (
    <div className="searchOuterContainer">
      <h1>Welcome {userName}</h1>
      <form
        onSubmit={(event) => {
          routeChange();
          event.preventDefault();
        }}
        className="searchContainer"
      >
        <h1 className="searchContainer__title">
          {clickAdvancedSearch ? "Advanced Search" : "Search"}
        </h1>
        <div className="searchContainer__sorting">
          <p className="p-searchComponent">By Name</p>
          <div className="search-inputFields-container">
            <form className="search-inputFields">
              <input
                type="text"
                placeholder="First Name"
                name="firstname"
                className="search-inputFields__firstname"
              ></input>
              <input
                type="text"
                placeholder="Last Name"
                name="lastname"
                className="search-inputFields__lastname"
              ></input>
            </form>

            {clickAdvancedSearch ? (
              <form className="search-inputFields">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                    value={BirthDate}
                    onChange={handleBirthDateChange}
                    autoOk
                    openTo="year"
                    disableFuture
                    format="yyyy MM dd"
                    emptyLabel="Date of Birth"
                    className="search-inputFields__date"
                  />
                </MuiPickersUtilsProvider>
                <input
                  type="text"
                  placeholder="Adress"
                  className="search-inputFields__adress"
                ></input>
              </form>
            ) : null}

            {clickAdvancedSearch ? (
              <form className="search-inputFields">
                <Input
                  className="search-inputFields__phone"
                  placeholder="Phone (International Code)"
                  value={value}
                  onChange={setValue}
                />
                <input
                  type="text"
                  className="search-inputFields__email"
                  placeholder="Email"
                  id="validateEmail"
                  onChange={(e) => validateEmail(e)}
                ></input>
              </form>
            ) : null}
          </div>
        </div>
        <div className="searchContainer__sorting">
          <p className="p-searchComponent">By Date/Type/Country</p>
          <div className="search-inputFields-container">
            <form className="search-inputFields">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  value={FromDate}
                  onChange={handleFromDateChange}
                  autoOk
                  disableFuture
                  format="yyyy MM dd"
                  emptyLabel="From"
                  className="search-inputFields__dateLeft"
                />
              </MuiPickersUtilsProvider>
              <p className="search-inputFields__to">-</p>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  value={ToDate}
                  onChange={handleToDateChange}
                  autoOk
                  disableFuture
                  format="yyyy MM dd"
                  emptyLabel="To"
                  className="search-inputFields__dateRight"
                />
              </MuiPickersUtilsProvider>
            </form>

            <form className="search-inputFields">
              <input
                type="text"
                placeholder="Country Code"
                className="search-inputFields__countryCode"
              ></input>
              <input
                type="text"
                className="search-inputFields__doctype"
                placeholder="Document Type"
              ></input>
            </form>
          </div>
        </div>
        <div className="searchContainer__sorting">
          <p className="p-searchComponent">By ID</p>
          <div className="search-inputFields-container">
            <form className="search-inputFields">
              <input
                type="text"
                className="search-inputFields__sessionID"
                placeholder="Session ID"
              ></input>
            </form>

            <form className="search-inputFields">
              <input
                type="text"
                className="search-inputFields__providerFolderID"
                placeholder="Provider Folder ID"
              ></input>
            </form>

            {clickAdvancedSearch ? (
              <form className="search-inputFields">
                <input
                  type="text"
                  className="search-inputFields__documentNumber"
                  placeholder="Document Number"
                ></input>
              </form>
            ) : null}

            {clickAdvancedSearch ? (
              <form className="search-inputFields">
                <input
                  type="text"
                  className="search-inputFields__tag"
                  placeholder="Tag"
                ></input>
              </form>
            ) : null}
          </div>
        </div>
        <h1 className="searchContainer__title">Filtered Search</h1>
        <div className="searchContainer__sorting">
          <p className="p-searchComponentStatus">Status</p>
          <p className="p-searchComponentDate">Date</p>
          {clickAdvancedSearch ? (
            <p className="p-searchComponentResult">Result</p>
          ) : null}
          <div className="gridSearchingContainer-column">
            <div className="gridSearchingContainer-rows">
              <FormControlLabel
                className="checkbox"
                control={
                  <Checkbox
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                    name="checkedC"
                    disableRipple
                  />
                }
                label="Declined"
              />
              <FormControlLabel
                className="checkbox"
                control={
                  <Checkbox
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                    name="checkedC"
                    disableRipple
                  />
                }
                label="Past 24h"
              />
              {clickAdvancedSearch ? (
                <FormControlLabel
                  className="checkbox"
                  control={
                    <Checkbox
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<RadioButtonCheckedIcon />}
                      name="checkedC"
                      disableRipple
                    />
                  }
                  label="Fraud Result"
                />
              ) : null}
            </div>

            <div className="gridSearchingContainer-rows">
              <FormControlLabel
                className="checkbox"
                control={
                  <Checkbox
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                    name="checkedC"
                    disableRipple
                  />
                }
                label="Approved"
              />
              <FormControlLabel
                className="checkbox"
                control={
                  <Checkbox
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                    name="checkedC"
                    disableRipple
                  />
                }
                label="Past Week"
              />
              {clickAdvancedSearch ? (
                <FormControlLabel
                  className="checkbox"
                  control={
                    <Checkbox
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<RadioButtonCheckedIcon />}
                      name="checkedC"
                      disableRipple
                    />
                  }
                  label="Selfie Result"
                />
              ) : null}
            </div>

            <div className="gridSearchingContainer-rows">
              <FormControlLabel
                className="checkbox"
                control={
                  <Checkbox
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                    name="checkedC"
                    disableRipple
                  />
                }
                label="In Progress"
              />
              <FormControlLabel
                className="checkbox"
                control={
                  <Checkbox
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                    name="checkedC"
                    disableRipple
                  />
                }
                label="Past Month"
              />
              {clickAdvancedSearch ? (
                <FormControlLabel
                  className="checkbox"
                  control={
                    <Checkbox
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<RadioButtonCheckedIcon />}
                      name="checkedC"
                      disableRipple
                    />
                  }
                  label="ID Doc. Result"
                />
              ) : null}
            </div>

            <div className="gridSearchingContainer-rows">
              <FormControlLabel
                className="checkbox"
                control={
                  <Checkbox
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                    name="checkedC"
                    disableRipple
                  />
                }
                label="Failed"
              />
              <FormControlLabel
                className="checkbox"
                control={
                  <Checkbox
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                    name="checkedC"
                    disableRipple
                  />
                }
                label="Past Quarter"
              />
              {clickAdvancedSearch ? (
                <FormControlLabel
                  className="checkbox"
                  control={
                    <Checkbox
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<RadioButtonCheckedIcon />}
                      name="checkedC"
                      disableRipple
                    />
                  }
                  label="Warnings"
                />
              ) : null}
            </div>
          </div>
        </div>
        <div className="searchButtons">
          <button
            type="submit"
            className="searchButtons__search"

            //     `https://portal-dev.zignsec.com/api/scanning/merchants/14340/transactions?lastName=${query}&sessionId=&dateFilter.startDate=2021-01-01T22%3A00%3A00.000Z&dateFilter.endDate=2021-04-30T21%3A00%3A00.000Z&pageFilter.skip=0&pageFilter.take=100`
          >
            Search
          </button>
          <div className="advancedSearchContainer" onClick={advancedSearch}>
            <button className="searchButtons__advancedSearch">
              Advanced Search
            </button>
            {clickAdvancedSearch ? (
              <ArrowDropUpIcon fontSize="large" />
            ) : (
              <ArrowDropDownIcon fontSize="large" />
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchComponent;
