import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
       
        Developed by{" "}
        <a target="blank" href="https://www.linkedin.com/in/mr-himanshu-tiwari/">
          Himanshu Tiwari
        </a>{" "}
      
      </div>
    </React.Fragment>
  );
}

export default App;
