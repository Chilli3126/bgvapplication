

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from "./NewFolder/Home"; 
import ContactUs from "./NewFolder/ContactUs"; 
import AboutUs from "./NewFolder/AboutUs";
import Career from "./NewFolder/Career";
import Services from "./NewFolder/Services";
import Products from "./NewFolder/Products";

function RedirectToHomeOnRefresh() {
  const navigate = useNavigate();
  const location = useLocation();
  const [redirected, setRedirected] = useState(false);

  useEffect(() => {
    const navigationEntries = window.performance.getEntriesByType("navigation");

    if (navigationEntries.length > 0 && navigationEntries[0].type === "reload") {
      if (!redirected) {
        setRedirected(true);
        navigate("/");
      }
    }
  }, [navigate, redirected]);

  return null;
}

function App() {
  return (
    <Router>
      <RedirectToHomeOnRefresh />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/career" element={<Career />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;







{/*
import './App.css';
import Login from './Login/Login.js';
import { Navigate, Route, Router, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

import Documents from './User/Documents.js';
import SuccesPage from './User/SuccesPage.js';
import Document from './Admin/Document.js';



function App() {
  const [islogin, setislogin] = React.useState(false);

  return (

  < BrowserRouter>
    <Routes>
      <Route>
      
      <Route path='/' element={<Login setislogin={setislogin} />} />
      <Route path='/Documents' element={islogin ? <Documents /> : <Navigate to="/" />}/> 
      <Route path='/Document' element={islogin ? <Document /> : <Navigate to="/" />}/> 
      <Route path="/success" element={<SuccesPage />} />
    
      </Route>
    </Routes>
    </BrowserRouter> 
  );
}


export default App;

*/}
