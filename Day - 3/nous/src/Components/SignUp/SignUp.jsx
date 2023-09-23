import React, { useState } from 'react';
import './SignUp.css';
import Signup from './signup-background.jpg';
import { useNavigate } from 'react-router-dom';
import LoadingPage from '../LoadingPage/LoadingPage';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../state/index';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.users);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = () => {
    const { firstName, lastName, email, password } = formData;
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      alert('Email already exists. Please use a different email.');
      return; 
    }
    dispatch(
      addUser({
        username: email,
        password, 
      })
    );
    navigate('/login');
  };

  return (
    <div className="signup-page">
      <div className="signup-image-container">
        <img src={Signup} alt="Signup" />
      </div>
      <div className="signup-main-box">
        <div className="signup-container">
          <h1>SIGN UP</h1>
          <div className="signup-box">
            <div className="signup-username-box">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
              <label>First Name</label>
            </div>
            <div className="signup-username-box">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
              <label>Last Name</label>
            </div>
            <div className="signup-username-box">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <label>Email</label>
            </div>
            <div className="signup-username-box">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <label>Password</label>
            </div>
            <p className="error-message">{errorMessage}</p>
            <div className="signup-button-box-outer">
              <div className="signup-button-box">
                <input
                  onClick={handleSignUp}
                  type="button"
                  value="Sign Up"
                ></input>
              </div>
              <div className="already">
                <p>Already have an account?</p>
                <p onClick={() => navigate('/login')} className="link">
                  Log in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage(SignUp);
