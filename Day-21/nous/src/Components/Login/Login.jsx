import React, { useState } from 'react';
import './Login.css';
import backgroundImage from './login-background.jpg';
import { useNavigate } from 'react-router-dom';
import LoadingPage from '../LoadingPage/LoadingPage';
import { useSelector } from 'react-redux';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [user, setUser] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    const { email, password } = formData;
    fetch('http://localhost:8080/api/auth/authenticate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          if (response.status === 403) {
            alert('User not found or invalid credentials');
          } else {
            throw new Error(`Request failed with status: ${response.status}`);
          }
        }
        return response.json();
      })
      .then((data) => {
        const token = data.token;
        console.log('Received Token:', token);
        localStorage.setItem('token', token);
        console.log(formData);
        fetch(`http://localhost:8080/api/auth/user/username/${formData.email}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            console.log(response);
            if (!response.ok) {
              throw new Error(`Request failed with status: ${response.status}`);
            }
            return response.text();
          })
          .then((data) => {
            console.log(data);
            console.log(user);
            localStorage.setItem('user', data);
          })
          .catch((error) => {
            console.error('Error fetching username:', error);
          });
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <div className="login-page">
      <div className='login-main-box'>
        <div className="login-container">
          <h1>LOG IN</h1>
          <div className='login-box'>
            <div className="login-username-box">
              <input type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required/>
              <label>Email</label>
            </div>
            <div className="login-password-box">
              <input type="password" 
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required/>
              <label>Password</label>
            </div>
            <div className='login-bottom'>
              <div className='login-inner-bottom-1'>
                <div className='login-button-box'>
                  <input type='button' onClick={handleLogin} value='Login' />
                </div>
                <div className='login-forgot-pass'>
                  <p>Forgot Password?</p>
                </div>
              </div>
              <div className='login-inner-bottom-2'>
                <div className='login-Dont'>
                  <p>Don't have an account?</p>
                </div>
                <div className='login-button-box-reg'>
                  <input type='button' onClick={() => navigate('/signup')} value='Register Now' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="login-image-container">
        <img src={backgroundImage} alt="Login" />
      </div>
    </div>
  );
}

export default LoadingPage(Login);
