// App.js  
import React from 'react';  
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';  
import AuthInterface from './AuthInterface'; // Import the AuthInterface component  
import SignUpPage from './SignUp'; // Import the updated SignUpPage component  

function App() {  
  return (  
    <Router>  
      <Routes>  
        <Route path="/login" element={<AuthInterface />} />  
        <Route path="/signup" element={<SignUpPage />} />  
        <Route path="/" element={<Navigate replace to="/login" />} /> {/* Redirect root to /login */}  
      </Routes>  
    </Router>  
  );  
}  

export default App;