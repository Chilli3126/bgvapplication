
import './App.css';
import Login from './Education/Login.js';
import Home from './Education/Home.js';
import { Navigate, Route, Router, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Addresses from './Education/Addresses.js';



function App() {
  const [islogin, setislogin] = React.useState(false);

  return (

  < BrowserRouter>
    <Routes>
      <Route>
      <Route path='/' element={<Login setislogin={setislogin} />} />
      <Route path='/Home' element={islogin ? <Home /> : <Navigate to="/" />}/> 
      <Route path='/addresses' element={islogin ? <Addresses /> : <Navigate to="/" />}/> 
      </Route>
    </Routes>
    </BrowserRouter>


   
  );
}

export default App;
