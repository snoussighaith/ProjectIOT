// AuthInterface.js  
import React from 'react';  
import { Link } from 'react-router-dom';  
import { motion } from 'framer-motion'; // Import Framer Motion  
import './AuthInterface.css'; // Import CSS for styling  

function AuthInterface() {  
  return (  
    <motion.div  
      initial={{ x: '-100%' }} // Start from the left  
      animate={{ x: 0 }} // Slide into place  
      exit={{ x: '100%' }} // Slide out to the right on exit  
      transition={{ duration: 0.5 }} // Duration of the transition  
      className="auth-container"  
    >  
      <div className="info-container">  
        <h2>New Here?</h2>  
        <p>Create your account to get started.</p>  
        <Link to="/signup">  
          <button className="sign-up-button1">Sign Up</button>  
        </Link>  
      </div>  

      <div className="form-container">  
        <div className="form">  
          <h2>Welcome Back!</h2>  
          <p>Please login to your account.</p>  
          
          <input type="text" placeholder="Email Or User Name" />  
          
          <input type="password" placeholder="Password" />  
          <Link to="#" className="forgot-password">Forgot your password?</Link>  
          <button className="sign-in-button1">Sign In</button>  
        </div>  
      </div>  
    </motion.div>  
  );  
}  

export default AuthInterface;