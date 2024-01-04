import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingBar from "react-top-loading-bar";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

const App = () => {
  const pageSize = 20;
  const country = 'in';
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0)


  return (
    <>
      <Router>
        <Navbar></Navbar>
        <LoadingBar
          color='blue'
          progress={progress}
          height={3}
        />
        <Routes>
          <Route
            exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key='general' country={country} category='business' pageSize={pageSize} ></News>}
          />
          <Route
            exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key='business' country={country} category='business' pageSize={pageSize} ></News>}
          />
          <Route
            exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' country={country} category='entertainment' pageSize={3} ></News>}
          />
          <Route
            exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key='general' country={country} category='general' pageSize={pageSize} ></News>}
          />
          <Route
            exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key='health' country={country} category='health' pageSize={pageSize} ></News>}
          />
          <Route
            exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key='science' country={country} category='science' pageSize={pageSize} ></News>}
          />
          <Route
            exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key='sports' country={country} category='sports' pageSize={pageSize} ></News>}
          />
          <Route
            exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key='technology' country={country} category='technology' pageSize={pageSize} ></News>}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
