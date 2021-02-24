import React from 'react'
import backgroundPhoto from '../assets/FinRahZel-9.svg'


const LandingPage = () => {

  return (
    <div className="landing-page">
      <header className="header">
        <h1 className="header-font">Fin Rah Zel</h1>
        <img className="header-background-img" src={backgroundPhoto} alt="Fin Rah Zel playing guitar" />
      </header>
    </div>
  )
}

export default LandingPage;