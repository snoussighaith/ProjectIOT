// src/components/HeaderSidebar.js

import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import styles from '../styles/HeaderSidebar.module.css'; // Assurez-vous d'ajouter les styles spécifiques si nécessaire

const HeaderSidebar = ({ onSignOut }) => {
  return (
    <div className={styles.container}>
      <Sidebar onSignOut={onSignOut} />
      <div className={styles.mainContent}>
        <Header />
        <hr />
        {/* Le contenu principal de la page peut être placé ici */}
      </div>
    </div>
    
  );
};

export default HeaderSidebar;
