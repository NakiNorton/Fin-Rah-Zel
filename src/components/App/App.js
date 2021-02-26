import LandingPage from '../LandingPage/LandingPage';
import About from '../About/About';
import NavBar from '../NavBar/NavBar';
import MusicContainer from '../MusicContainer/MusicContainer';
import UpcomingDates from '../UpcomingDates/UpcomingDates';
import Contact from '../Contact/Contact';

import FadeInSection from '../FadeInAnimation/FadeInAnimation'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './App.css';
import './AppMQ.css';

library.add(fab)


const App = () => {
  return (
    <div className="App">
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
        <h2 className="footer-logo">Fin Rah Zel</h2>
      </footer>
    </div>
  )
}

export default App;
