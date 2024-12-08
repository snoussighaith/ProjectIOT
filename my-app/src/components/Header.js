// src/components/Header.js  

import React from 'react';  
import styles from '../styles/HeaderSidebar.module.css'; // Vérifiez le bon chemin vers le CSS  
import profile from '../profile.png'; // Assurez-vous que ce chemin est correct  
import { FaBell } from 'react-icons/fa';  

const Header = () => {  
  return (  
    <div className={styles.header}>  
      <h2>Settings</h2>  
      <div className={styles.notification}>  
        <FaBell className={styles.notificationIcon} />   
        <img src={profile} alt="Profile" style={{ width: '12%', height: 'auto' }} />  
      </div>  
    </div>  
    
  );  
};  

export default Header;