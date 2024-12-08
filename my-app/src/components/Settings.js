// src/components/Settings.js  

import React, { useState } from 'react';  
import { useNavigate } from 'react-router-dom';  
import styles from '../styles/Settings.module.css'; 
import Sidebar from './Sidebar'; // Importer le sidebar  
import Header from './Header'; // Importer l'en-tête  

const Settings = () => {  
  const [userName, setUserName] = useState('');  
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');  
  const [confirmPassword, setConfirmPassword] = useState('');  
  const [threshold, setThreshold] = useState('');  
  const [pricePerKw, setPricePerKw] = useState('');  

  const navigate = useNavigate();   

  const handleSubmit = (e) => {  
    e.preventDefault();  
    console.log({ userName, email, password, threshold, pricePerKw });  
    // Vous pouvez ajouter la logique pour sauvegarder les modifications ici  
  };  

  const handleSignOut = () => {  
    localStorage.removeItem('token');   
    navigate('/login');   
  };  

  return (  
    <div className={styles.appContainer}>  
      <Sidebar onSignOut={handleSignOut} />  
      <div className={styles.settingsContainer}>  
        <Header />  {/* Utilisez le Header ici */}  
        <hr />  
        <form onSubmit={handleSubmit}>  
          <div className={styles.profileSection}>  
            <div className={styles.profileImage}>  
              👤  
            </div>  
            <div className={styles.inputGroup}>  
              <input  
                type="text"  
                placeholder="User Name"  
                value={userName}  
                onChange={(e) => setUserName(e.target.value)}  
                className={styles.input}  
                required  
              />  
              <input  
                type="email"  
                placeholder="Email"  
                value={email}  
                onChange={(e) => setEmail(e.target.value)}  
                className={styles.input}  
                required  
              />  
              <input  
                type="password"  
                placeholder="Password"  
                value={password}  
                onChange={(e) => setPassword(e.target.value)}   
                className={styles.input}   
                required  
              />  
              <input  
                type="password"  
                placeholder="Confirm Password"  
                value={confirmPassword}  
                onChange={(e) => setConfirmPassword(e.target.value)}  
                className={styles.input}  
                required  
              />  
            </div>  
          </div>  

          <div className={styles.settingsSection}>  
            <input  
              type="number"  
              placeholder="Threshold in kW"  
              value={threshold}  
              onChange={(e) => setThreshold(e.target.value)}  
              required className={styles.input}  
            />  
            <input  
              type="number"  
              placeholder="Price of 1 kW"  
              value={pricePerKw}  
              onChange={(e) => setPricePerKw(e.target.value)}  
              className={styles.input}  
              required  
            />  
          </div>  

          <button className={styles.button} type="submit">Save Changes</button>  
        </form>  
      </div>  
    </div>  
  );  
};  

export default Settings;