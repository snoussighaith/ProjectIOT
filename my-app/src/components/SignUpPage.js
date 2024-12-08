import React, { useState } from 'react';  
import { Link, useNavigate } from 'react-router-dom';  
import { motion } from 'framer-motion';  
import styles from '../styles/AuthInterface.module.css'; // Utilisation du même fichier CSS Modules  

import { ToastContainer, toast } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';  

function SignUpPage() {  
  const [username, setUsername] = useState('');  
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');  
  const [confirmPassword, setConfirmPassword] = useState(''); // Nouvel état pour le mot de passe de confirmation  

  const navigate = useNavigate();  

  const handleSignUp = async (e) => {  
    e.preventDefault();  

    // Vérification des champs vides  
    if (!username) {  
      toast.error("Veuillez choisir un nom d'utilisateur !");  
      return;  
    }  
    if (!email) {  
      toast.error("Veuillez entrer votre email !");  
      return;  
    }  
    if (!password) {  
      toast.error("Veuillez choisir un mot de passe !");  
      return;  
    }  
    if (!confirmPassword) {  
      toast.error("Veuillez confirmer votre mot de passe !");  
      return;  
    }  

    // Vérification que les mots de passe correspondent  
    if (password !== confirmPassword) {  
      toast.error("Les mots de passe ne correspondent pas !"); // Use toast instead of alert  
      return;  
    }  

    const response = await fetch('http://localhost:5000/api/signup', {  
      method: 'POST',  
      headers: { 'Content-Type': 'application/json' },  
      body: JSON.stringify({ username, email, password, confirmPassword }),  
    }); // Inclure confirmPassword  

    const data = await response.json();  
    // alert(data.message);  
    if (response.ok) {  
      toast.success(data.message);  
      setTimeout(() => {  
        navigate("/login")  
      }, 2000)  
    } else {  
      toast.error(data.message)  
    }  
  };  

  return (  
    <motion.div  
      initial={{ x: '100%' }}  
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
        <h2>Hello Again?</h2>  
        <p>To keep connected with us please login with your personal info</p>  
        <Link to="/login">  
          <button className={styles['sign-in-button2']}>Sign In</button>  
        </Link>  
      </div>  

      <div className={styles['form-container']}>  
        <div className={styles['form']}>  
          <h2>Create Your Account</h2>  
          <input  
            type="text"  
            placeholder="Choose a username"  
            value={username}  
            onChange={(e) => setUsername(e.target.value)} required  
          />  
          <input  
            type="email"  
            placeholder="Enter your email"  
            value={email}  
            onChange={(e) => setEmail(e.target.value)} required  
          />  
          <input  
            type="password"  
            placeholder="Choose a password"  
            value={password}  
            onChange={(e) => setPassword(e.target.value)} required  
          />  
          <input  
            type="password"  
            placeholder="Confirm your password" // Champ de confirmation du mot de passe  
            value={confirmPassword}  
            onChange={(e) => setConfirmPassword(e.target.value)} required  
          />  
          <button className={styles['sign-up-button2']} onClick={handleSignUp}>  
            Sign Up  
          </button>  
        </div>  
      </div>  
    </motion.div>  
  );  
}  

export default SignUpPage;