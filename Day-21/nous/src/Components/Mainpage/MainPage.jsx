import React from 'react';
import './MainPage.css';
import Project1 from './Project 1.jpg';
import Project2 from './Project 2.jpg';
import Project3 from './Project 3.jpg';
import Project4 from './Project 4.png';
import tiptrick1 from './tip&trick1.jpg';
import tiptrick2 from './tip&trick2.jpg';
import tiptrick3 from './tip&trick3.jpg';
import tiptrick4 from './tip&trick4.jpg';
import LoadingPage from '../LoadingPage/LoadingPage';
import { useEffect } from 'react';
import { useRef } from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function MainPage() {
  const elements = useRef([]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".pro",{opacity: 0, y: "30%"},
      { y: '0%',
      opacity: 1,
      duration : 1,
      scrollTrigger: {
        trigger: ".pro",
        start : "top 70%",
      }},
    );
    gsap.fromTo(".projects",
    {opacity: 0, y: "30%"},
    { y: '0%',
      opacity: 1,
      duration : 1,
      delay: "+=0.1",
      scrollTrigger: {
        trigger: ".projects",
        start : "top 104%",
      }},
    )
    gsap.fromTo(".pro2",
    {opacity: 0, y: "30%"},
    { y: '0%',
    opacity: 1,
    duration : 1,
    delay: "+=0.1",
    scrollTrigger: {
      trigger: ".pro2",
      start : "top 70%",
    }},
    )
    gsap.fromTo(".articles",
    {opacity: 0, y: "30%"},
    { y: '0%',
      opacity: 1,
      duration : 1,
      delay: "+=0.1",
      scrollTrigger: {
        trigger: ".articles",
        start : "top 104%",
      }},
    )

    
  }, []);
  return (
    <div className="main-page">
        <div className="header">
            <h1>Necessities Optimized for Ultimate Satisfaction</h1>
        </div>
        <div className="featured-projects">
            <h2 className='pro' ref={elements}>Featured Projects</h2>
            <div className='projects'>
              <div className="project-card">
                <img src={Project1} alt="Project 1" />
                <h3>Wall Sconces</h3>
                <p>Easy, fun, and affordable DIY wall sconces with a shelf made out of wood and metal for hanging tea lights by Laci Jane DIY.</p>
              </div>
              <div className="project-card">
                <img src={Project2} alt="Project 2" />
                <h3>TERRACOTTA POT</h3>
                <p>These DIY plant stands are the perfect finishing touch to bring the outside in. Add a bespoke biophilic element to your space with these inspiring ideas.</p>
              </div>
              <div className="project-card">
                <img src={Project3} alt="Project 3" />
                <h3>Terracotta Paint Hack</h3>
                <p>A nifty little trick, via TikTok, to turn mismatched glass, plastic, and ceramic vessels into textural “terracotta” pieces, using just baking soda and paint.</p>
              </div>
              <div className="project-card">
                <img src={Project4} alt="Project 4" />
                <h3>PLANT STAND</h3>
                <p>Build stylish plant stands to hold plant pots of your choice. Saw the legs, put together, stain in shade of your choice.</p>
              </div>
            </div>
        </div>
        <div className="latest-articles">
            <h2 className='pro2'>Tutorials</h2>
            <div className='articles'>
              <div className="article-card">
                <img className='temp' src={tiptrick1}/>
                <h3>When and How to Use Primer</h3>
                <p>Knowing when and how to use primer can be tricky especially if you are a new do it yourselfer.  A recent survey by CBY Tools showed that one of the most popular do-it-yourself tasks is painting a room. I don’t know about you, but when I first started painting my projects,..</p>
              </div>
              <div className="article-card">
                <img src={tiptrick2}/>
                <h3>4 Furniture Cleaning Tips</h3>
                <p>Did you know that a dirty kitchen and a grimy bathroom are the biggest turns-offs for prospective buyers? Right move has revealed that grubby kitchen units, mucky dishes in the sink, and filthy bathrooms are the most offensive factors that put people off from buying a property...</p>
              </div>
              <div className="article-card">
                <img src={tiptrick3}/>
                <h3>Top Ten Wood Glues</h3>
                <p>Being a professional Crafter for over ten years now, I have tried several types of wood glue. I thought I’d put together a list of the top ten wood glues I have tried on my wood craft projects. This list also includes helpful information like dry time, usage, Amazon affiliate links to purchase, and why it made my list. Here we go!</p>
              </div>
              <div className="article-card">
                <img src={tiptrick4}/>
                <h3>Top 7 Tips to Organize Your Bedroom</h3>
                <p>New year new you! It’s time to start fresh and get organized. Here are some top tips to organize your bedroom.</p>
              </div>
            </div>
        </div>
      
    </div>
  );
}

export default LoadingPage(MainPage);