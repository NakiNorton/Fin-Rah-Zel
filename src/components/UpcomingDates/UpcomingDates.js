import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import artistPhoto1 from '../../assets/musician-1.jpg'
import Avatar from '@material-ui/core/Avatar';

import './UpcomingDates.css'

const UpcomingDates = () => {

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '300px',
      height: '300px',
      opacity: '0.9',
      margin: '0 auto',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }))

  const classes = useStyles()

  return (
    <section className="upcoming-gigs section">
      <h2 className="h2">Upcoming Gigs</h2>
      <ul className="event-list">
        <h3 className="h3">March</h3>
        <li className="event">Barry's bar, Saturday October 15th 2021 @9am</li>
        <li className="event">Waterfront Cafe, Saturday March 20th 2021 @9am</li>
        <h3 className="h3">April</h3>
        <li className="event">Bri bar, Saturday October 15th 2021 @9am</li>
      </ul>

      <div className="avatar-img">
        <Avatar className={classes.root} src={artistPhoto1} alt="Fin Rah Zel playing guitar" />
      </div>
    </section>
  )
}

export default UpcomingDates;