import './App.css';
import LandingPage from './LandingPage';
import ButtonAppBar from './ButtonAppBar';
import MusicContainer from './MusicContainer';
import UpcomingDates from './UpcomingDates';
import SubscribeContainer from './SubscribeContainer';


const App = () => {
  return (
    <div className="App">
      <ButtonAppBar />
      <LandingPage id='landing-page'/>
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
