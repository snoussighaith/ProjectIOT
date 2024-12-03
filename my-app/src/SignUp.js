// SignUp.js  
import React, { useState } from 'react';  
import { Link } from 'react-router-dom';  
import { motion } from 'framer-motion';  
import './AuthInterface.css';  

function SignUpPage() {  
    

  return (  
    <motion.div  
      initial={{ x: '100%' }}  
      animate={{ x: 0 }}  
      exit={{ x: '100%' }}  
      transition={{ duration: 0.5 }}  
      className="auth-container"  
    >  
      <div className="info-container">  
        <h2>Hello Again?</h2>  
        <p>To keep connected with us please login with your personal info</p>  
        <Link to="/login">  
          <button className="sign-in-button2">Sign In</button>  
        </Link>  
      </div>  

      <div className="form-container">  
        <div className="form">  
          <h2>Create Your Account</h2>  
          
          <input   
            type="text"   
            placeholder="Choose a username"   
              
          />  
          
          <input   
            type="email"   
            placeholder="Enter your email"   
               
          />  
          
          <input   
            type="password"   
            placeholder="Choose a password"   
               
          />  
          
          <button className="sign-up-button2" >Sign Up</button>  
        </div>  
      </div>  
    </motion.div>  
  );  
}  

export default SignUpPage;