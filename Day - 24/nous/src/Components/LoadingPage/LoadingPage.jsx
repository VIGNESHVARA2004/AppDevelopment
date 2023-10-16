import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import './LoadingPage.css';
import Logo from '../LogoBar/Logo.svg';

const LoadingPage = (WrappedComponent) => {
  return function LoadingPage(props) {
    const [isLoading, setIsLoading] = useState(true);
    const page = useRef()
    const logo = useRef()
    useEffect(() => {
      const tl = gsap.timeline();

      tl.fromTo(logo.current, { opacity: 0 }, { opacity: 1, duration: 0.7, delay: 0.5})
      tl.fromTo(page.current ,{y : 0}, { y : '-100%', duration: 1,ease:"Power4.easeIn", delay: 0.1})
        .call(() => {
          setTimeout(() => {
            setIsLoading(false);
          }, 0);
        });
    }, []);

    return (
        <div className={`back ${isLoading ? 'loading' : ''}`}>
                <div ref={page} className={`loading-page`}>
                    <div className="loading-logo">
                        <img ref={logo} src={Logo} alt="Logo" />
                    </div>
                </div>
                <WrappedComponent {...props} />
        </div>
    );
  };
};

export default LoadingPage;
/*
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './LoadingPage.css';
import Logo from '../LogoBar/Logo.svg';

const LoadingPage = (WrappedComponent) => {
  return function LoadingPage(props) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const tl = gsap.timeline();

      tl.fromTo('.loading-logo', { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 0.1})
      tl.fromTo('.loading-page',{y : 0}, { y : '-100%', duration: 1.5,ease:"Power4.easeIn",delay : 0.5})
        .call(() => {
          setTimeout(() => {
            setIsLoading(false);
          }, 0);
        });
    }, []);

    return (
        <div className={`back ${isLoading ? 'loading' : ''}`}>
                <div className={`loading-page`}>
                    <div className="loading-logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                </div>
                <WrappedComponent {...props} />
        </div>
    );
  };
};

export default LoadingPage;

*/