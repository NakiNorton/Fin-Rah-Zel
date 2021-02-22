import React, { useState } from 'react'
// import Header from './Header.js'

// import { makeStyles } from '@material-ui/core/styles';
// import artistPhoto1 from '../assets/musician-1.jpg'
import backgroundPhoto from '../assets/FinRahZel-9.svg'
// import Avatar from '@material-ui/core/Avatar';

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