import React from "react";
import "../../components/resultsComponent/ImageContainer.scss";
import "../../App.scss";

function ImageContainer(props) {
  return (
    <>
      <div className="fullImageContainer">
        <div className="imageContainer">
          <img
            alt={props.imgName}
            src={props.imgUrl}
            className="imageContainer__img"
          />
        </div>
        <hr />
        <div className="commandsContainer">
          <p>Zoom</p>
          <p>Turn</p>
          <p>Flip</p>
          <p>Expand</p>
        </div>
      </div>
    </>
  );
}

export default ImageContainer;
