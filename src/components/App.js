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
      <LandingPage />
      <MusicContainer id='music-container'/>
      <UpcomingDates id='upcoming-dates' />
      <SubscribeContainer id='subscribe-container' /> 
    </div>
  )
}

export default App;
