import React from 'react'
import './App.css'
import { BrowserRouter } from "react-router-dom";
import Router from './layouts&Router/Router';
import { AuthProvider } from './context/AuthContext';

function App() {

  return (
    <BrowserRouter>
    <AuthProvider>
        <Router/>
    </AuthProvider>
  </BrowserRouter>
  )
}

export default App
