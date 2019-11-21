import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainMenu from './MainMenu';

const Home = () => <div>Home</div>;

const About = () => <div>About</div>;

const Code = () => <div>Code</div>;

const Contact = () => <div>Contact</div>;

const Info = () => <div>info</div>;



function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <MainMenu />
        </header>
        <div style={{height:'500px'}}>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/about"><About/></Route>
          <Route exact path="/code"><Code/></Route>
          <Route exact path="/contact"><Contact/></Route>
          <Route exact path="/info"><Info/></Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
