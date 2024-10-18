import React from 'react'
import './App.css'
import Welcome from './pages/general/Welcome';
import Login from './pages/general/Login';
import { BrowserRouter } from "react-router-dom";
import Router from './layouts&Router/Router';

function App() {

  return (
    <BrowserRouter>
    {/* <AuthProvider> */}
        <Router />
    {/* </AuthProvider> */}
  </BrowserRouter>
  )
}

export default App
