import React, { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import "./NewSessionButtons.scss";
import { progressBarClassChanger1 } from "../ProgressBarComponent"

function NewSessionButtons(props) {
  
  const [appState, changeState] = useState({
    activeObject: null,
    objects: [
      { id: 1, name: "Passport" },
      { id: 2, name: "Drivers Licence" },
      { id: 3, name: "ID" },
      { id: 4, name: "Selfie" },
      { id: 5, name: "Other Documents" },
    ],
  });

  function toggleActive(index) {
    changeState({ ...appState, activeObject: appState.objects[index] });
  }

  function toggleActiveStyles(index) {
    if (appState.objects[index] === appState.activeObject) {
      return "newSessionContainer__buttons--active";
    } else {
      return "newSessionContainer__buttons--inactive";
    }
  }

  return (
    <>
      <div className="newSessionContainer__buttons">
        {appState.objects.map((elements, index) => (
          <button
            key={index}
            className={toggleActiveStyles(index)}
            onClick={() => {
                toggleActive(index);
                props.advancedButton();
                progressBarClassChanger1();
              }
            }
          >
            {elements.name}
            <AddCircleIcon style={{ padding: "0 .5rem" }} />
          </button>
        ))}
      </div>
    </>
  );
}

export default NewSessionButtons;
