import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";
import "../App.scss";

function NotFound() {
  return (
    <div className="notFoundContainer">
      <div className="notFound">
        <h1 className="notFound__Title">404 - Not Found!</h1>
        <p>
          The page you are looking for does not exist. Please check your URL
          adress or{" "}
          <Link to="/" className="notFound__Link">
            Go Home
          </Link>
        </p>
      </div>
    </div>
  );
}

export default NotFound;
