import React, { useState } from 'react';
import './SignUp.css';
import Signup from './signup-background.jpg';
import { useNavigate } from 'react-router-dom';
import LoadingPage from '../LoadingPage/LoadingPage';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../state/index';
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.users);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
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
    console.log(formData);
    const { firstname, lastname, email, password } = formData;
    const userExists = users.some((user) => user.email === email);
    dispatch(
      addUser({
        firstname,
        lastname,
        email,
        password, 
      })
    );
    axios.post('http://localhost:8080/api/auth/register', formData, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        if (response.status !== 200) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        const data = response.data;
        const token = data.token;
        console.log('Received Token:', token);
        navigate("/login")
      })
      .catch(error => {
        console.error(error);
      });
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
                name="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
                required
              />
              <label>First Name</label>
            </div>
            <div className="signup-username-box">
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
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
