
import React from "react";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter }  from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import Competence from "./components/Competence";
import Experience from "./components/Experience";
import Slide from "./components/Slide";
function App() {

  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar/>
          <Route path="/" exact> 
            <Home />
            <About/>
          </Route>
          <Route path="/competence">
            <Competence/>
          </Route>
          <Route path="/experience">
            <Experience/>
          </Route>
          <Route path="/slide">
            <Slide/>
          </Route>
      </BrowserRouter>
    </div>
   
  )
}
export default App;
