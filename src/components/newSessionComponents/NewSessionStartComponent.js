import React, { useState } from "react";
import "../../App.scss";
import "./NewSessionStartComponent.scss";
import ProgressBarComponent from "../ProgressBarComponent";
import NewSessionButtons from "./NewSessionButtons";
import { progressBarClassChanger2 } from "../ProgressBarComponent"
import Dnd from "./Dnd";

function NewSessionStartComponent() {
  const [clickButton, setButton] = useState(true);

  function handleClick(){
    progressBarClassChanger2();
  }

  return (
    <div className="newSessionPageContainer">
      <ProgressBarComponent />

      <div className="newSessionContainer">
        <p className="newSessionContainer__title">Add Document</p>

        <NewSessionButtons advancedButton={() => setButton(false)} />

        <div className="newSessionContainer__uploadContainer">
          {clickButton ? (
            <p className="newSessionContainer__uploadArgument">
              Choose type of File You Want To Upload
            </p>
          ) : (
            <div className="newSessionContainer__addFileBox">
              <p className="newSessionContainer__addFile">Add file</p>
              <Dnd />
              {/* <div className="newSessionContainer__dragAndDropBox">
                <p className="newSessionContainer__message">
                  Drag & Drop file or search here
                </p>
              </div> */}
              <div className="buttonContainer">
                <button className="buttonContainer__addCancel" onClick={handleClick} >Add</button>
                <button className="buttonContainer__addCancel">Cancel</button>
              </div>
            </div>
          )}
        </div>
        <div className="buttonContainer__bottomButtons">
          <button className="buttonContainer__createButton buttonContainer__createButton--customized">
            Create Customized
          </button>
          <button className="buttonContainer__createButton buttonContainer__createButton--session">
            Create session
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewSessionStartComponent;
