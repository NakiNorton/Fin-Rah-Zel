import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import photo from '../../assets/nature-background.jpg'

import './Contact.css'

const Contact = () => {
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
      <section className="contact section">
        <img className="contact-img" src={photo} alt="Fin Rah Zel holding guitar"/>
        <div className="form-area">
            <h2 className="h2">Contact</h2>

          {(!msgSubmitted && !msgError) &&
            <>
              <p className="p">Send a message to Fin Rah Zel</p>
                <input id="nameInput" name="name" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input id="emailInput" name="email" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <textarea id="message" name="message" type="text" placeholder="Your Message..." rows="5" maxLength='250' value={message} onChange={(e) => setMessage(e.target.value)} />
                <button id="submit-btn" onClick={() => handleClick()}>SEND</button>
            </>
          }
        </div>
          {msgSubmitted &&
          <p className="p">Thanks for your message!</p>
          }
          {msgError &&
          <p className="p">Sorry, something went wrong and we couldn't send your message. Please refresh the page and try again.</p>
          }

      </section>

  )
}  

export default Contact;