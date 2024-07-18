import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {

  state = {
    progress: 0
  }

  setProgress = (progress) =>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <div>
            <LoadingBar
              color="#f11946"
              progress={this.state.progress}
            />
          </div>
          <Routes>
            <Route
              path="/"
              element={<News setProgress={this.setProgress} category="general" key="1" />}
            ></Route>
            <Route
              path="/general"
              element={<News setProgress={this.setProgress} category="general" key="2" />}
            ></Route>
            <Route
              path="/business"
              element={<News setProgress={this.setProgress} category="business" key="3" />}
            ></Route>
            <Route
              path="/sports"
              element={<News setProgress={this.setProgress} category="sports" key="4" />}
            ></Route>
            <Route
              path="/science"
              element={<News setProgress={this.setProgress} category="science" key="5" />}
            ></Route>
            <Route
              path="/technology"
              element={<News setProgress={this.setProgress} category="technology" key="6" />}
            ></Route>
            <Route
              path="/entertainment"
              element={<News setProgress={this.setProgress} category="entertainment" key="7" />}
            ></Route>
            <Route
              path="/health"
              element={<News setProgress={this.setProgress} category="health" key="8" />}
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
