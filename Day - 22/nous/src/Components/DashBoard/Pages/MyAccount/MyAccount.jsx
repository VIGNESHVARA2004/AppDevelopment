import React from 'react';
import './MyAccount.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Insta from './instagram.png';
import X from './twitter.png';
import LinkedIn from './linkedin.png'
export default function MyAccount() {
  const [name, setName] = useState("MY ACCOUNT");
  const [email, setEmail] = useState("MY ACCOUNT");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    const userName = user.username;
    const email = user.email;
    console.log(userName);
    if (userName) {
      setName(userName);
    }
    if(email){
      setEmail(email);
    }
  }, []);

  return (
    <div className="myaccount-main-content">
      <div className="myaccount-welcome">
        <h1>Welcome  {name}</h1>
        <p>
          Here, you can effortlessly manage your DIY projects, stay updated on
          recent activities, and access various tools and features to enhance
          your DIY experience.
        </p>
      </div>
      <div className="myaccount-user-details">
        <h2>User Detail</h2>
        <div className="myaccount-user-inner">
          <p>{name}</p>
          <p>{email}</p>
        </div>
        <input type="button" value="Edit" />
      </div>
      <div className="myaccount-social">
        <h2>Social</h2>
        <div className="myaccount-social-inner">
          <div className="myaccount-social-links">
            <img src={Insta} />
            <a href='https://www.instagram.com/__.v__i__c__k__y.__/'>Instagram </a>
          </div>
          <div className="myaccount-social-links">
            <img src={X} />
            <a href='https://www.twitter.com/Vignesh31778096'>Twitter</a>
          </div>
          <div className="myaccount-social-links">
            <img src={LinkedIn} />
            <a href='https://www.linkedin.com/in/vigneshvara-s-783625229/'>LinkedIn</a>
            
          </div>
        </div>
      </div>
    </div>
  );
}
