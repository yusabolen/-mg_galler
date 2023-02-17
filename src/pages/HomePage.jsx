import React from "react";
import Picture from "../components/Picture";
import data from "../helper/data";
import "../styles/style.css";

const HomePage = () => {
  return (
    <>
      <h2>İMAGES</h2>
      <div className="container">
        {data.map(({ photographer, src: { large } }) => (
          <Picture photo={photographer} large={large} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
