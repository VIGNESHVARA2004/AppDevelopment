import React from 'react'
import './About.css';
import { useNavigate } from 'react-router-dom';
export default function About() {
  const navigate = useNavigate()
  return (
    <div className="about-container">
      <div className='about-welcome-container'>
        <div className='title'>About</div>
        <h1>NOUS creates<br/>“new standard” to enrich<br/> your everyday life.</h1>
        <p>Step into the world of NOUS, your ultimate destination for all things related to DIY (Do-It-Yourself) home improvement. We are a passionate community of homeowners, builders, makers, and creators who share a common love for enhancing living spaces and transforming houses into homes through boundless creativity and innovation.</p>
      </div>
      <div className='about-Our-Mission'>
        <p className='title'>Our Mission</p>
        <p>At NOUS, our mission is to inspire, educate, and empower individuals to embark on their DIY journeys with confidence. We believe that everyone has the potential to become a skilled DIY enthusiast and transform their living spaces into personal havens of style and functionality.</p>
      </div>
      <div className='about-offer'>
        <p className='title'>What We Offer</p>
        <ul className='list'>
          <li>Inspiration: Our platform is a treasure trove of DIY ideas, projects, and success stories. Whether you're looking to renovate a room, tackle a garden project, or craft custom furniture, you'll find endless inspiration here.</li>
          <li>Expert Guidance: We provide step-by-step tutorials, expert tips, and comprehensive guides to help you navigate the world of DIY. From beginner-friendly projects to advanced challenges, we've got you covered.</li>
          <li>Community: Join a thriving community of DIY enthusiasts. Share your projects, seek advice, and connect with like-minded individuals who share your passion for home improvement.</li>
          <li>Resources: Stay informed about the latest trends, tools, and materials in the world of home improvement. Our informative articles, product reviews, and expert interviews are valuable resources for your DIY journey.</li>
          <li>Creativity: Your home is a canvas waiting to be adorned with your unique style and craftsmanship. Whether you prefer a rustic farmhouse vibe, a modern urban aesthetic, or something entirely original, DIY Home Improvement Hub is here to support your vision.</li>
        </ul>
      </div>
      <div className='about-commitment'>
        <p className='title'>Our Commitment</p>
        <p>NOUS is committed to fostering a positive and inclusive DIY community. We celebrate diversity, creativity, and the joy of learning. No matter your skill level or experience, we welcome you to join us in celebrating the art of DIY home improvement.</p>
      </div>
      <div className="join-button-container">
      `<input
        onClick={() =>  navigate('/login')}
        type="button"
        value="Join Us"/>
      </div>
  </div>
);
}
