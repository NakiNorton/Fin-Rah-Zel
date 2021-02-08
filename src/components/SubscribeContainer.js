import React, { useState } from 'react'
import photo from '../assets/Fin-Rah-Zel-Titled-Pic.png'

const SubscribeContainer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscription] = useState(false)

  const handleClick = (e) => {
    alert(`Submit ${email}`)
    setEmail('')
    setSubscription(true)
  }

  return (
    <>
      <section className="subscribe-container">
        <section className="column-1">
        <img className="img" src={photo} alt="Fin Rah Zel holding guitar"/>
        </section>
        <section className="column-2">
          <h2 className="section-heading">Subscribe</h2>
          {!subscribed &&
            <>
              <p>No FOMO here! Subscribe to keep up to date </p>
              <div className="form-area">
                <input id="emailInput" name="email" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button id="submit-btn" onClick={() => handleClick()}>SUBMIT</button>
              </div>
            </>
          }
          {subscribed &&
            <p>Thanks for signing up!</p>
          }
        </section>
      </section>
    </>
  )
}  

export default SubscribeContainer;