import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ExperienceComponent from "./components/expereinceComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <ExperienceComponent />
        </div>
      </div>
    );
  }
}

export default App;
