import React from 'react'

const Contact = () => {
  return (
    <div id="Contact">
      <div className="contact-container">
        <h2 className="here-we-are">HERE WE ARE</h2>
        <h2>Contact Form</h2>
        <label htmlFor="name"></label>
        <input
          type="text"
          placeholder="Enter your name"
          required
          className="form-inputs"/><br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          required
          className="form-inputs"/><br />
        <label htmlFor="message">Message:</label>
        <textarea className="form-inputs">Here your message!</textarea><br />
        <label htmlFor="tel">Phone:</label>
        <input
          type="number"
          name="number"
          id="number"
          placeholder="Enter phone number"
          required
          className="form-inputs"/><br />
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          placeholder="Enter your subject"
          required
          className="form-inputs"/><br />

        <div><button className="btn">Submit</button></div>
      </div>
    </div>
  )
}

export default Contact;
