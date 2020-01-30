import React from 'react';
import Ceo from './media/images/Ceo.png';
import AppointmentForm from './AppointmentForm';

const Contact = () => (

  <div>
    <AppointmentForm />
    <img src={Ceo} className='bizCard' width='75%' alt='801-510-8656 -- ceojanitorial@gmail.com'></img>
  </div>
)

export default Contact;
