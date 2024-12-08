import React, { useState } from 'react';  
import { Link, useNavigate } from 'react-router-dom';  
import { motion } from 'framer-motion';  
import { ToastContainer, toast } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';  
import styles from '../styles/AuthInterface.module.css';  

function AuthInterface() {  
  const [usernameOrEmail, setUsernameOrEmail] = useState('');  
  const [password, setPassword] = useState('');  
  const navigate = useNavigate();  

  const handleSignIn = async (e) => {  
    e.preventDefault();  
    const response = await fetch('http://localhost:5000/api/signin', {  
      method: 'POST',  
      headers: { 'Content-Type': 'application/json' },  
      body: JSON.stringify({ email: usernameOrEmail, password })  
    });  
    const data = await response.json();  
    if (response.ok) {  
      localStorage.setItem('token', data.token);  
      toast.success('Login successful!'); // Show success toast  
      navigate('/dashboard');  
    } else {  
      toast.error(data.message); // Show error toast  
    }  
  };  

  return (  
    <motion.div  
      initial={{ x: '-100%' }}  
      animate={{ x: 0 }}  
      exit={{ x: '100%' }}  
      transition={{ duration: 0.5 }}  
      className={styles['auth-container']}  
    >  
      <ToastContainer   
        position="top-right" // Set notification position  
        autoClose={3000} // Set display duration to 3 seconds  
        hideProgressBar={false} // Optionally show progress bar  
        closeOnClick   
        pauseOnHover   
        draggable   
        theme="light" // Optionally change theme  
      />   

      <div className={styles['info-container']}>  
        <h2>New Here?</h2>  
        <p>Create your account to get started.</p>  
        <Link to="/signup">  
          <button className={styles['sign-up-button1']}>Sign Up</button>  
        </Link>  
      </div>  

      <div className={styles['form-container']}>  
        <div className={styles['form']}>  
          <h2>Welcome Back!</h2>  
          <p>Please login to your account.</p>  

          <input  
            type="text"  
            placeholder="Email Or User Name"  
            value={usernameOrEmail}  
            onChange={(e) => setUsernameOrEmail(e.target.value)}  
          />  

          <input  
            type="password"  
            placeholder="Password"  
            value={password}  
            onChange={(e) => setPassword(e.target.value)}  
          />  

          <Link to="#" className={styles['forgot-password']}>  
            Forgot your password?  
          </Link>  
          <button className={styles['sign-in-button1']} onClick={handleSignIn}>  
            Sign In  
          </button>  
        </div>  
      </div>  
    </motion.div>  
  );  
}  

export default AuthInterface;