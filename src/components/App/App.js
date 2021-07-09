import React, { useEffect, useState } from 'react'
import FadeInSection from '../UI_Animations/FadeInAnimation'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './App.css';
import './AppMQ.css';
import LoadingSpinner from '../UI_Animations/LoadingSpinner'
import NavBar from '../NavBar/NavBar'

import LandingPage from '../LandingPage/LandingPage'
import Quote from '../Quote/Quote'
import MusicContainer from '../MusicContainer/MusicContainer'
import UpcomingDates from '../UpcomingDates/UpcomingDates'
import Contact from '../Contact/Contact'


library.add(fab)

const App = () => {
  const [ isLoading, setIsLoading ] = useState(true)

  const cacheImages = async (assets) => {
    const promises = await assets.map(asset => {
      return new Promise(function (resolve, reject) {
        const img = new Image()

        img.asset = asset
        img.onload = resolve()
        img.onerror = reject()
      })
    })
    await Promise.all(promises)

    setIsLoading(false)
  }

  useEffect(() => {
    const landingImg = ['../../assets/FinRahZel-9.svg']

    cacheImages(landingImg)
  }, [])

  return (
    <div className="App">
      { isLoading &&
      <>
        <NavBar />
        <LoadingSpinner />
      </>
      }

      { !isLoading &&
      <>
        <NavBar />
        <FadeInSection>
          <LandingPage />
        </FadeInSection>
        
        <FadeInSection>
          <Quote id='about' />
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
        </>
        }
    </div>
  )
}

export default App;
