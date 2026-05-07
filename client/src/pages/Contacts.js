import React from 'react';

const Contacts = () => {
  return (
    <div className="page">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p><strong>Address:</strong> 123 Ice Cream Street, Odesa, Ukraine</p>
        <p><strong>Phone:</strong> +380 (XX) XXX-XX-XX</p>
        <p><strong>Email:</strong> info@bravoicecream.odessa.ua</p>
        <p><strong>Opening Hours:</strong> Mon-Sun: 10:00 AM - 10:00 PM</p>
      </div>
      <div className="contact-form">
        <h2>Send us a message</h2>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;