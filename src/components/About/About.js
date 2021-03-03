import React from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './About.css'

const About = () => {
  return (
    <div className='about'>
      <div className='about-container section'>
      <h2 className="h2">ABOUT</h2>
      <section className='about-content'>
        <article>
          Fin Rah Zel is known in his local home town of New Plymouth New Zealand, for delivering soul enriching songs, giving the listener a true heart felt experience.<br /> 
          <br />He loves to surf the waves of the Taranaki coast and often explores the local trails on his dirt bike.
        </article>
        <div className="s-media-container-about">
          <h3 className="h3">Follow Fin Rah Zel</h3>
          <a href="https://www.facebook.com/FinRahZel">
            <i className="s-media-icon">
              <FacebookIcon fontSize="inherit" color='inherit' />
            </i>
          </a>

          <a href="https://www.instagram.com/finrahzel/?hl=en">
            <i className="s-media-icon">
              <InstagramIcon fontSize="inherit" color='inherit' />
            </i>
          </a>

          <a href="https://www.youtube.com/channel/UC2IwDrBMMbk0Ux0844IuEBA">
            <i className="s-media-icon">
              <YouTubeIcon fontSize="inherit" color='inherit' />
            </i>
          </a>

          <a href="https://open.spotify.com/artist/2LHIjyp5jNwOU2bJftD6K3">
            <i className="s-media-icon">
              <FontAwesomeIcon icon={['fab', 'spotify']} />
            </i>
          </a>
        </div>
      </section>
    </div>
    </div>
  )

}

export default About