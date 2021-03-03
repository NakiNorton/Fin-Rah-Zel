import React, { lazy, Suspense } from 'react'
// import FadeInSection from '../UI_Animations/FadeInAnimation'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './App.css';
import './AppMQ.css';
import LoadingSpinner from '../UI_Animations/LoadingSpinner'

import LandingPage from '../LandingPage/LandingPage'
// const About = lazy(() => import('../About/About'))
const NavBar = lazy(() => import('../NavBar/NavBar'))
// const MusicContainer = lazy(() => import('../MusicContainer/MusicContainer'))
// const UpcomingDates = lazy(() => import('../UpcomingDates/UpcomingDates'))
// const Contact = lazy(() => import('../Contact/Contact'))

library.add(fab)


const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<LoadingSpinner />}>
    
        <NavBar />
        <LandingPage id='landing-page'/>

      

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
