import React, { useState } from 'react'
// import Header from './Header.js'

// import { makeStyles } from '@material-ui/core/styles';
// import artistPhoto1 from '../assets/musician-1.jpg'
import backgroundPhoto from '../assets/Fin-Rah-Zel-dog-background.jpg'
// import Avatar from '@material-ui/core/Avatar';

const LandingPage = () => {

  return (
    <header className="header">
      <h1 className="header-font" style={{fontSize: "6rem"}}>Fin Rah Zel</h1>
      <img className="header-background-img" src={backgroundPhoto} alt="Fin Rah Zel playing guitar" />
    </header>
  )
}

export default LandingPage;