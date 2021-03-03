import React, { lazy } from 'react'
import backgroundPhoto from '../../assets/FinRahZel-9.svg'
import './LandingPage.css'


import FadeInSection from '../UI_Animations/FadeInAnimation'

const About = lazy(() => import('../About/About'))
const MusicContainer = lazy(() => import('../MusicContainer/MusicContainer'))
const UpcomingDates = lazy(() => import('../UpcomingDates/UpcomingDates'))
const Contact = lazy(() => import('../Contact/Contact'))

const LandingPage = () => {

  return (
    <div className="landing-page">
      <header className="header">
        <h1 className="header-text">Fin Rah Zel</h1>
        <img className="header-background-img" src={backgroundPhoto} alt="Fin Rah Zel playing guitar" />
      </header>
      <FadeInSection>
        <About id='about' />
      </FadeInSection>

      <FadeInSection>
        <MusicContainer id='music' />
      </FadeInSection>

      <FadeInSection>
        <UpcomingDates id='upcoming-gigs' />
      </FadeInSection>

      <FadeInSection>
        <Contact id='contact' />
      </FadeInSection > 
    </div>
  )
}

export default LandingPage;