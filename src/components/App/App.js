import React, { lazy, Suspense } from 'react'
import FadeInSection from '../FadeInAnimation/FadeInAnimation'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './App.css';
import './AppMQ.css';
import LoadingSpinner from '../LoadingSpinner'

const LandingPage = lazy(() => import('../LandingPage/LandingPage'))
const About = lazy(() => import('../About/About'))
const NavBar = lazy(() => import('../NavBar/NavBar'))
const MusicContainer = lazy(() => import('../MusicContainer/MusicContainer'))
const UpcomingDates = lazy(() => import('../UpcomingDates/UpcomingDates'))
const Contact = lazy(() => import('../Contact/Contact'))

library.add(fab)


const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<LoadingSpinner />}>
      
        <NavBar />

        <FadeInSection>
          <LandingPage id='landing-page'/>
        </FadeInSection>

        <FadeInSection>
          <About id='about'/>
        </FadeInSection>

        <FadeInSection>
          <MusicContainer id='music'/>
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
