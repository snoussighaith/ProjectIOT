// src/components/Sidebar.js  

import React from 'react';  
import styles from '../styles/Sidebar.module.css';  
import logo from '../logo.png';  
import { FaBell, FaCog, FaTachometerAlt, FaFileInvoiceDollar, FaChartLine, FaSignOutAlt } from 'react-icons/fa';  

const Sidebar = ({ onSignOut }) => (  
  <nav className={styles.sidebar}>  
    <div className={styles.logo}>  
      <img src={logo} alt="Logo" style={{ width: '40%', height: 'auto' }} />  
    </div>  
    <input type="search" placeholder="Search..." className={styles.searchInput} />  
    <ul>  
      <div className={styles.acceuil}>  
        <ul className={styles.menuList}>  
          <li>  
            <a className={styles.a} href="/dashboard">  
              <FaTachometerAlt style={{ marginRight: '8px' }} /> Dashboard  
            </a>  
          </li>  
          <li>  
            <a className={styles.a} href="/consumption">  
              <FaChartLine style={{ marginRight: '8px' }} /> Consumption  
            </a>  
          </li>  
          <li>  
            <a className={styles.a} href="/billing">  
              <FaFileInvoiceDollar style={{ marginRight: '8px' }} /> Billing  
            </a>  
          </li>  
          <li>  
            <a className={styles.a} href="/settings">  
              <FaCog style={{ marginRight: '8px' }} /> Settings  
            </a>  
          </li>   
        </ul>  
      </div>  

      <li className={styles.signout}>  
        <a className={styles.a} onClick={onSignOut} href="#">  
          <FaSignOutAlt style={{ marginRight: '8px' }} /> Sign Out  
        </a>  
      </li>  
    </ul>  
  </nav>  
);  

export default Sidebar;