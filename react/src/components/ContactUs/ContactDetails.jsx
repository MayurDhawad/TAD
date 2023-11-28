import React from 'react'

const ContactDetails = () => {
  return (
    <div className='contact-details'>
      <img className='contact-main-img' src={require('../../assets/images/contact/contact-details-main.svg').default} alt="contact-us" />
      <div className='contact-links'>
        <a className='contact-item' href='tel:+918976812213'>
          <img src={require('../../assets/images/contact/contact-phone.svg').default} alt="contact-us" />
          +91-8976812213
        </a>
        <a className='contact-item' href='mailto:counsellor@tadcourses.com'>
          <img src={require('../../assets/images/contact/contact-mail.svg').default} alt="contact-us" />
          counsellor@tadcourses.com
        </a>
      </div>
    </div>
  )
}

export default ContactDetails