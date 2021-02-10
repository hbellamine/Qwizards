import React from "react";
import "./Banner.css";

const Banner = (props) => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${"https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"})`,
      }}
    >
      <div className="container">
        <h1>{props.title}</h1>
        <h4>{props.quote}</h4>
      </div>
    </div>
  );
};

export default Banner;
