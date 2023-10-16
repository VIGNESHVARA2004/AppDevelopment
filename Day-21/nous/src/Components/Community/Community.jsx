import React from 'react'
import './Community.css';
import { useNavigate } from 'react-router-dom';
export default function Community() {
    const navigate = useNavigate();
  return (
    <div className="community-page">
        <div className='community-heading'>
          Community
        </div>
        <div className='community-container'>
          <div className='community-welcome'>
            <h1 className="community-title">Welcome to NOUS Community</h1>
            <p className="community-introduction">
              At NOUS, we believe that the best ideas are born when creative minds come together.
              Our Community Page is the heart of our DIY family, where like-minded enthusiasts, builders, makers, and creators gather
              to share their passion for home improvement.
            </p>
          </div>
          <div className='community-join'>
            <h2>Why Join Our Community:</h2>
            <div className='community-join-box'>
              <div className="community-feature-box">
                <h3>Connect and Collaborate</h3>
                <p>
                  Join forces with others who share your interests, whether you're a seasoned pro or just starting out.
                  Collaborate on projects, exchange ideas, and learn from each other.
                </p>
              </div>
              <div className="community-feature-box">
                <h3>Showcase Your Work</h3>
                <p>
                  Our community is your platform to shine. Showcase your latest projects, renovations, and DIY masterpieces.
                  Get feedback, tips, and recognition from fellow DIY enthusiasts.
                </p>
              </div>
            </div>
          </div>
      <div className='community-button-outer'>
        <input className="community-join-button" type="button" onClick={() => navigate('/login')} value='Join Our Community'/>
      </div>
    </div>
  </div>
  )
}
