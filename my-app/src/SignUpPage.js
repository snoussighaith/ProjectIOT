import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from '../src/styles/AuthInterface.module.css'; // Utilisation du même fichier CSS Modules

function SignUpPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
    });
    const data = await response.json();
    alert(data.message);
  };

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.5 }}
      className={styles['auth-container']}
    >
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
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Choose a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
