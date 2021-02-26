import React from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
  return (
    <div className='about'>
      <h2 className="section-heading">ABOUT</h2>
      <section className='about-content'>
        <article>
          Fin Rah Zel is known in his local home town of New Plymouth New Zealand, for delivering soul enriching songs, giving the listener a true heart felt experience. He loves to surf the waves of the Taranaki coast and often explores the local trails on his dirt bike.
        </article>
        <div className="follow-links s-media-container">
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