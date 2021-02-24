import React from 'react'



const MusicContainer = () => {

  return (
    <>
      <section className="music-container">
        <div className="sec-title-container">
          <h2 className="section-heading">Latest Releases</h2>
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