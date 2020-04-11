import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  <div className="jumbotron">
    <h1>Buy my courses | Admin Page</h1>
    <p>some paragraph</p>
    <Link to="about" className="btn btn-prymary btn-lg">
      Learn More
    </Link>
  </div>;
};

export default HomePage;
