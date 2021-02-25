import LandingPage from './LandingPage';
import About from './About';
import ButtonAppBar from './ButtonAppBar';
import MusicContainer from './MusicContainer';
import UpcomingDates from './UpcomingDates';
import Contact from './Contact';

import FadeInSection from './FadeInAnimation/FadeInAnimation'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './App.css';
import './AppMQ.css';
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab)


const App = () => {
  return (
    <div className="App">
      <ButtonAppBar />

      <FadeInSection>
      <LandingPage id='landing-page'/>
      </FadeInSection>

      <FadeInSection>
        <About id='about'/>
      </FadeInSection>

      <FadeInSection>
        <MusicContainer id='music-container'/>
      </FadeInSection>

      <FadeInSection>
        <UpcomingDates id='upcoming-dates' />
      </FadeInSection>

      <FadeInSection>
        <Contact id='contact' /> 
      </FadeInSection >

      <footer>
        <h2 className="sml-h2">Fin Rah Zel</h2>
      </footer>
    </div>
  )
}

export default App;
