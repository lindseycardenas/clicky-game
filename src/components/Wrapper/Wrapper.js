import React from "react";
import "./Wrapper.css";

//stateless component
const Wrapper = props => (
  <div
    className="wrapper"
    style={{
      backgroundImage: "url('https://i.imgur.com/EG1Cfd3.jpg')"
    }}>
    
    {props.children}
  </div>
);

export default Wrapper;
