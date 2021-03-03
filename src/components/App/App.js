import React, { lazy, Suspense } from 'react'
import FadeInSection from '../UI_Animations/FadeInAnimation'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './App.css';
import './AppMQ.css';
import LoadingSpinner from '../UI_Animations/LoadingSpinner'
// import LandingPage from '../LandingPage/LandingPage'
import NavBar from '../NavBar/NavBar'
import backgroundPhoto from '../../assets/FinRahZel-9.svg'
import '..//LandingPage/LandingPage.css'


const About = lazy(() => import('../About/About'))
const MusicContainer = lazy(() => import('../MusicContainer/MusicContainer'))
const UpcomingDates = lazy(() => import('../UpcomingDates/UpcomingDates'))
const Contact = lazy(() => import('../Contact/Contact'))



library.add(fab)


const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<LoadingSpinner />}>
        <NavBar />
        <div className="landing-page">
          <header className="header">
            <h1 className="header-text">Fin Rah Zel</h1>
            <img className="header-background-img" src={backgroundPhoto} alt="Fin Rah Zel playing guitar" />
          </header>
        </div>

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

        <footer>
          <div className="footer">
            <h2 className="footer-logo">Fin Rah Zel</h2>
          </div>
        </footer> 
        
    </Suspense>
    </div>
  )
}

export default App;
