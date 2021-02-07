import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import artistPhoto1 from '../assets/musician-1.jpg'
import Avatar from '@material-ui/core/Avatar';

const UpcomingDates = () => {

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '300px',
      height: '300px',
      opacity: '0.9',
      // border: "5px solid lightgray",
      margin: '0 auto',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  const classes = useStyles();
  return (
    <>
      <section className="upcoming-dates">
        <h2 className="section-heading">Upcoming Dates</h2>
        <ul className="event-list">
          <li className="event">Barry's bar, Saturday October 15th 2021 @9am</li>
          <li className="event">Waterfront Cafe, Saturday March 20th 2021 @9am</li>
          <li className="event">Bri bar, Saturday October 15th 2021 @9am</li>
        </ul>

        <div className="artist-photo">
          <Avatar className={classes.root} src={artistPhoto1} alt="Fin Rah Zel playing guitar" />
        </div>
      </section>
    </> 
  )
}

export default UpcomingDates;