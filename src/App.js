import './App.css';
import React,{useContext} from 'react';
import MainHeader from "./component/mainHeader/MainHeader"
import Body from './component/Body/Body';
import Home from './component/home/Home';
import MainHome from './component/MainHome/MainHome';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import ExploreContext from './context/ExploreContext';
import ExploreCreate from './context/ExploreCreate';
import { useNavigate } from 'react-router-dom';
function App() {

  // const navigate = useNavigate();
  // const explore = useContext(ExploreCreate);
  //   console.log(explore.clickExplore);

  return (

    
    <div className="app">
      <ExploreContext>
        <Router>
          <Routes>
            <Route path="/" element={<MainHome />} />
            <Route path="/alternative" element={<Home/>} />
            
          </Routes>
         
        </Router>

        
      </ExploreContext>
    </div>
  );
}

export default App;