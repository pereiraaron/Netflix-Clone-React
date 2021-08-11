import React from "react";
import "./Loader.css";

const Loader = ({ isLargeRow }) => {
  const rows = window.innerWidth > 768 && isLargeRow ? 8 : !isLargeRow ? 7 : 4;
  return (
    <div className="loading-row">
      <div className="loading-row-cardwrapper">
        {Array.from(Array(rows).keys()).map((row) => {
          return (
            <div
              className={`loading-card ${isLargeRow && "loading-card-large"}`}
              key={row}
            >
              <div className="loading-animation"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Loader;
