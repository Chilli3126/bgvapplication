
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
