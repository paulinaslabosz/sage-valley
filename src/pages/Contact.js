import React from 'react';
import contactImg from '../images/contact.jpeg';

function Contact() {
  return (
    <>
      <h2>Contact</h2>
      <div>
        <ul>
          <li>
            <p>23 Street, 00-000 City</p>
          </li>
          <li>
            <p>+00 123 45 67</p>
          </li>
          <li>
            {' '}
            <p>name@email.com</p>
          </li>
        </ul>
        <div>
          <img src={contactImg} alt='Window seat with pillows and books' />
        </div>
      </div>
    </>
  );
}

export default Contact;