// SignUp.js  
import React from 'react';  
import { Link } from 'react-router-dom'; // For navigation between pages  
import { motion } from 'framer-motion'; // Import Framer Motion for animations  
import './AuthInterface.css'; // Import CSS for styling  

function SignUpPage() {  
  return (  
    <motion.div  
      initial={{ x: '100%' }} // Start the component from the right  
      animate={{ x: 0 }} // Slide in to the original position  
      exit={{ x: '100%' }} // Slide out to the right on exit  
      transition={{ duration: 0.5 }} // Duration for the transition  
      className="auth-container"  
    >  
      {/* Partie "New Here?" */}  
      <div className="info-container">  
        <h2>Hello Again?</h2>  
        <p>  
          To keep connected with us please login with your personal info  
        </p>  
        <Link to="/login">  
          <button className="sign-in-button2">Sign In</button>  
        </Link>  
      </div>  

      {/* Formulaire d'inscription */}  
      <div className="form-container">  
        <div className="form">  
          <h2>Create Your Account</h2>  
          
          <input type="email" placeholder="Enter your email" />  
          
          <input type="text" placeholder="Choose a username" />  
          
          <input type="password" placeholder="Choose a password" />  
          
          <input type="password" placeholder="Confirm your password" />  
          <button className="sign-up-button2">Sign Up</button>  
        </div>  
      </div>  
    </motion.div>  
  );  
}  

export default SignUpPage;