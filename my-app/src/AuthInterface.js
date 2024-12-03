// AuthInterface.js  
import React, { useState } from 'react';  
import { Link, useNavigate } from 'react-router-dom';  // Importer useNavigate  
import { motion } from 'framer-motion';  
import './AuthInterface.css';  

function AuthInterface() {  
   

  return (  
    <motion.div  
      initial={{ x: '-100%' }}  
      animate={{ x: 0 }}  
      exit={{ x: '100%' }}  
      transition={{ duration: 0.5 }}  
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
          
          <input   
            type="text"   
            placeholder="Email Or User Name"   
             
              
          />  
          
          <input   
            type="password"   
             
             
          />  
          <Link to="454545465#" className="forgot-password">Forgot your password?</Link>  
          <button className="sign-in-button1" >Sign In</button>  
        </div>  
      </div>  
    </motion.div>  
  );  
}  

export default AuthInterface;