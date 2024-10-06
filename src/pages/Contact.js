import React from 'react';
import './Contact.scss';
import contactImg from '../images/contact.jpeg';
import fbIcon from '../images/socials/facebookIcon.png';
import igIcon from '../images/socials/instagramIcon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faPhone,
  faAt,
} from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <>
      <h2 className='contact_title'>Contact</h2>
      <div className='contact_wrapper'>
        <div>
          <ul>
            <li>
              <FontAwesomeIcon icon={faLocationDot} />
              <p>23 Street, 00-000 City</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} />
              <p>+00 123 45 67</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faAt} />
              <p>name@email.com</p>
            </li>
          </ul>

          <h3>Check our socials</h3>
          <div className='contact_socials'>
            <a
              href='https://www.facebook.com/'
              target='_blank'
              rel='noreferrer'
            >
              <img src={fbIcon} alt='Facebook icon' />
            </a>
            <a href='https://instagram.com/' target='_blank' rel='noreferrer'>
              <img src={igIcon} alt='Instagram icon' />
            </a>
          </div>
        </div>
        <div className='contact_imgWrapper'>
          <img src={contactImg} alt='Window seat with pillows and books' />
        </div>
      </div>
    </>
  );
}

export default Contact;
