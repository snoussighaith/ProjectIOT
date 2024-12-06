// App.js (ou la partie de ton code où tu gères la navigation)  
import React from 'react';  
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';  
import AuthInterface from './components/AuthInterface';  
import SignUpPage from './components/SignUpPage';  
import Settings from './components/Settings'; // Importation du composant Settings 
import Dashboard from './components/Dashboard' 

function App() {  
  return (  
    <Router>  
      <Routes>  
        <Route path="/login" element={<AuthInterface />} />  
        <Route path="/signup" element={<SignUpPage />} />  
        <Route path="/settings" element={<Settings />} /> /* Route pour Settings */ 
        <Route path='/dashboard' element ={< Dashboard />} />
        <Route path="/" element={<Navigate replace to="/login" />} />  
      </Routes>  
    </Router>  
  );  
}  

export default App;