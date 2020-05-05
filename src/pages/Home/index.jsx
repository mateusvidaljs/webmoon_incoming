import React from 'react';
import { FiLinkedin, FiFacebook, FiInstagram } from 'react-icons/fi';

import gifDeveloping from '../../assets/space_dev.gif';

import './styles.css';

const Home = () => {
  return (
    <div className="container">
      <section className="image-content">
        <img src={ gifDeveloping } alt="Developing" />
      </section>

      <section className="text-content">
        <p className="title">Oops! Ainda estamos construindo o site...</p>

        <p className="common-text">Mas fica tranquilo! Você pode entrar em contato com a gente pelas redes!</p>
      </section>

      <section className="social-media-pills">
        <a 
          className="pill" 
          href="https://www.linkedin.com/company/webmoonsoftwarehouse/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FiLinkedin />
        </a>

        <a
          className="pill" 
          href="https://fb.me/webmoonsh" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FiFacebook />
        </a>

        <a
          className="pill" 
          href="https://www.instagram.com/webmoonsh/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FiInstagram />
        </a>
      </section>
    </div>
  );
}

export default Home;