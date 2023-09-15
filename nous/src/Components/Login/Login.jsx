import React from 'react'
import './Login.css'
import backgroundImage from './login-background.jpg';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/signup');
  };
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <button onClick={handleLogin} type="submit">Login</button>
        </form>
      </div>
      <div className="image-container">
        <img src={backgroundImage} alt="Login" />
      </div>
  </div>
  )
}
