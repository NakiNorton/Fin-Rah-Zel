import React from 'react'
import './UpcomingDates.css'

const UpcomingDates = () => {
  return (
    <section className="upcoming-gigs section">
      <h2 className="h2 upcoming-h2" style={{ paddingTop: '5rem' }}>Upcoming Gigs</h2>
      <ul className="event-list">
        <h3 className="h3">To be announced</h3>
        {/* <li className="event">Support act for Sons Of Zion, The Square, Palmerston North</li> */}
      </ul>
    </section>
  )
}

export default UpcomingDates;