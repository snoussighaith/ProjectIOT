import React, { useState } from 'react';  
import styles from '../styles/Settings.module.css'; // Importer le CSS en tant que module  
import logo from '../logo.png';  
import profile from '../profile.png'
import { FaCog, FaTachometerAlt, FaFileInvoiceDollar, FaChartLine, FaSignOutAlt, FaBell } from 'react-icons/fa'; // Importation des icônes  

const Settings = () => {  
  const [userName, setUserName] = useState('');  
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');  
  const [confirmPassword, setConfirmPassword] = useState('');  
  const [threshold, setThreshold] = useState('');  
  const [pricePerKw, setPricePerKw] = useState('');  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    // Handle form submission (e.g., send data to the backend)  
    console.log({ userName, email, password, threshold, pricePerKw });  
  };  

  return (  
    <div className={styles.appContainer}>  
      <Sidebar />  
      <div className={styles.settingsContainer}>  
        <div className={styles.header}>  
          <h2>Settings</h2>
          <div className={styles.notification}>
            <FaBell className={styles.notificationIcon} /> {/* Ajout de l'icône de notification */} 
            <img src={profile}  alt="Profile" style={{ width: '12%', height: 'auto' }} />
          </div>  
          
        </div>  
        <hr />  
        <form onSubmit={handleSubmit}>  
          <div className={styles.profileSection}>  
            <div className={styles.profileImage}>  
              👤 {/* Icon representing the user */}  
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
              required  className={styles.input}
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

const Sidebar = () => (  
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
          <li className={styles.a} >  
            <a href="/settings">  
              <FaCog style={{ marginRight: '8px' }} /> Settings  
            </a>  
          </li>   
        </ul>  
      </div>  

      <li className={styles.signout}>  
        <a className={styles.a}  href="/login">  
          <FaSignOutAlt style={{ marginRight: '8px' }} /> Sign Out  
        </a>  
      </li>  
    </ul>  
  </nav>  
);   

export default Settings;
