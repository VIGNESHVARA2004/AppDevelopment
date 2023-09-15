import React,{UseNavigate} from 'react';
import './SignUp.css';
import Signup from "./SignUp - background.jpg";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate()
  return (
    <div className="signup-page">
      <div className="signup-image-container">
        <img src={Signup} alt="Signup" />
      </div>
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <button onClick={navigate('/')} type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
