import React from 'react'

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const MusicContainer = () => {

  return (
    <>
      <section className="music-container">
        <div className="sec-title-container">
          <h2 className="section-heading">Music</h2>
        </div>
        <div className="s-media-container">
          <h3>Listen to Fin Rah Zel on your favourite app:</h3>
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


        <div className="video-container">

          <div className="video" style={{ display: "inline", padding: "1rem" }}>
            <iframe title="song-one" width="560" height="315" src="https://www.youtube.com/embed/s5YiR6JBmlY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
              Sorry, your browser doesn't support embedded videos.
            </iframe>
          </div>
   

          <div className="video" style={{ display: "inline", padding: "1rem" }}>
            <iframe title="song-two" width="560" height="315" src="https://www.youtube.com/embed/lrPM56ssq30" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              Sorry, your browser doesn't support embedded videos.
            </iframe>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default MusicContainer;