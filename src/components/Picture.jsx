import React from "react";

const Picture = ({ photo, large }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={large} alt="" />
      </div>
      <p>{photo}</p>
    </div>
  );
};

export default Picture;
