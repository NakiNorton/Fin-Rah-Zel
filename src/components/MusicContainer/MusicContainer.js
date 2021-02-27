import React from 'react'

import './MusicContainer.css'

const MusicContainer = () => {

  return (
      <section className="music section">
        <h2 className="h2">Latest Releases</h2>
        <div className="video-container">

          <div className="video">
          <iframe id="responsive-iframe" title="Be My Lady" src="https://www.youtube.com/embed/s5YiR6JBmlY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
              Sorry, your browser doesn't support embedded videos.
            </iframe>
          </div>

          <div className="video">
          <iframe id="responsive-iframe" title="Don't Turn Around" src="https://www.youtube.com/embed/lrPM56ssq30" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullFcreen>
              Sorry, your browser doesn't support embedded videos.
            </iframe>
          </div>
          
        </div>
      </section>
  )
}

export default MusicContainer;