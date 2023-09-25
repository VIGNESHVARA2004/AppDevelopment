import React from 'react'
import './Footer.css';
import LoadingPage from '../LoadingPage/LoadingPage';
import { useNavigate, } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
  return (
    <div className='footer-main'>
        <div className='inner-footer-box'>
            <div className='top-box'>
                <div>
                    <p onClick={() => navigate("/about")}>About</p>
                </div>
                <div>
                    <p onClick={() => navigate("/")}>Blog</p>
                </div>
                <div>
                    <p onClick={() => navigate("/privacy")}>Privacy</p>
                </div>
                <div>
                    <p onClick={() => navigate("/terms")}>Terms</p>
                </div>
                <div>
                    <p onClick={() => navigate("/faq")}>FAQ</p>
                </div>
            </div>
            <div className='bottom-box'>
                <p>© 2023 NOUS from DOPE</p>
            </div>
        </div>
    </div>
  )
}

export default LoadingPage(Footer);