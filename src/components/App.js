import './App.css';
import LandingPage from './LandingPage';
import About from './About';
import ButtonAppBar from './ButtonAppBar';
import MusicContainer from './MusicContainer';
import UpcomingDates from './UpcomingDates';
import SubscribeContainer from './SubscribeContainer';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab)


const App = () => {
  return (
    <div className="App">
      <ButtonAppBar />
      <LandingPage id='landing-page'/>
      <About id='about'/>
      <MusicContainer id='music-container'/>
      <UpcomingDates id='upcoming-dates' />
      <SubscribeContainer id='subscribe-container' /> 
      <footer>
        <h2 className="sml-h2">Fin Rah Zel</h2>
      </footer>
    </div>
  )
}

export default App;
