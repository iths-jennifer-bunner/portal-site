import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./NewSessionStartComponent.scss";
import "../../App.scss";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

function Dnd() {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const fileName = files.map((file) => (
    <div key={file.name} className="newSessionContainer__addFileBox">
      {/* <div> */}
      <p className="newSessionContainer__addFileBox newSessionContainer__addFileBox--iconStyle ">
        Uploaded Passport : {file.name}{" "}
        <HighlightOffIcon style={{ padding: "0 .5rem" }} />
      </p>
      {/* <img src={file.preview} style={{ width: "200px" }} alt="preview" /> */}
      {/* </div> */}
    </div>
  ));

  return (
    <div className="newSessionContainer__addFileBox">
      <div {...getRootProps()} className="newSessionContainer__dragAndDropBox">
        <input {...getInputProps()} />
        <p className="newSessionContainer__message">
          Drag & Drop file or search here
        </p>
      </div>
      <div className="newSessionContainer__addFileBox newSessionContainer__addFileBox--margins">
        {fileName}
      </div>
    </div>
  );
}

export default Dnd;
