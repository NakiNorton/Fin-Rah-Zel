import React from 'react'
import backgroundPhoto from '../../assets/sml_band.jpg'
import './LandingPage.css'


const LandingPage = () => {

  return (
    <div className="landing-page">
      <h1 className="header-text">Fin Rah Zel</h1>
      <img className="header-background-img" id="background-img" src={backgroundPhoto} alt="Fin Rah Zel playing guitar" />
    </div>
  )
}

export default LandingPage;