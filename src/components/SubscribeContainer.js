import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import photo from '../assets/Fin-Rah-Zel-Titled-Pic.png'

const SubscribeContainer = () => {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ message, setMessage ] = useState('')
  const [ msgSubmitted , setMsgSubmitted] = useState(false)
  const [ msgError, setMsgError ] = useState(false)

  const handleClick = (e) => {
    let service_id = 'contactForm'
    const templateId = 'contactForm'
    const userId = 'user_kLBvhhw1nt5nmgAeYLlAk'
    const templateParams = {
      'from_name': name,
      'reply_to': email,
      'message': message
    }

    emailjs.send(service_id, templateId, templateParams, userId)
      .then((response) => {
        setMsgSubmitted(true)
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        setMsgError(true)
        console.log('FAILED...', err);
      });
  }

  return (
    <>
      <section className="subscribe-container">
        <section className="column-1">
        <img className="img" src={photo} alt="Fin Rah Zel holding guitar"/>
        </section>
        <section className="column-2">
          <div className="sec-title-container">
            <h2 className="section-heading">CONTACT</h2>
          </div>
          {(!msgSubmitted && !msgError) &&
            <>
              <p>Send a message to Fin Rah Zel</p>
              <div className="form-area">
                <input id="nameInput" name="name" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input id="emailInput" name="email" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <textarea id="message" name="message" type="text" placeholder="Your Message..." rows="8" maxlength='250' value={message} onChange={(e) => setMessage(e.target.value)} />
                <button id="submit-btn" onClick={() => handleClick()}>SEND</button>
              </div>
            </>
          }
          {msgSubmitted &&
            <p>Thanks for your message!</p>
          }
          {msgError &&
            <p>Sorry, something went wrong and we couldn't send your message. Please refresh the page and try again.</p>
          }
        </section>
      </section>
    </>
  )
}  

export default SubscribeContainer;