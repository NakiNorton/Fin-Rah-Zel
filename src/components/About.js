import React from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
  return (
    <div className='about fade-in-section'>
      <h2 className="section-heading">ABOUT</h2>
      <section className='about-content'>
        <article>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </article>
        <div className="s-media-container">
          <h3 style={{ fontSize: '1.8rem' }}>Follow Fin Rah Zel</h3>
          <a href="https://www.facebook.com/FinRahZel">
            <i className="sm-icon">
              <FacebookIcon fontSize="inherit" color='inherit' />
            </i>
          </a>

          <a href="https://www.instagram.com/finrahzel/?hl=en">
            <i className="sm-icon">
              <InstagramIcon fontSize="inherit" color='inherit' />
            </i>
          </a>

          <a href="https://www.youtube.com/channel/UC2IwDrBMMbk0Ux0844IuEBA">
            <i className="sm-icon">
              <YouTubeIcon fontSize="inherit" color='inherit' />
            </i>
          </a>

          <a href="https://open.spotify.com/artist/2LHIjyp5jNwOU2bJftD6K3">
            <i className="sm-icon">
              <FontAwesomeIcon icon={['fab', 'spotify']} />
            </i>
          </a>
        </div>
      </section>
    </div>
  )

}

export default About