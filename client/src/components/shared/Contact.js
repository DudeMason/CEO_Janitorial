import React from 'react';
import Ceo from './media/images/Ceo.png';
import AppointmentForm from './AppointmentForm';
import { Grid } from 'semantic-ui-react';

const Contact = () => (

  <>
    <div>
      <Grid columns='2' stackable>
        <Grid.Column>
          <AppointmentForm />
        </Grid.Column>
        <Grid.Column>
          <img src={Ceo} className='bizCard' width='95%' alt='801-510-8656 -- ceojanitorial@gmail.com'></img>
        </Grid.Column>
      </Grid>
    </div>
    <div className='watermarkZindex'>
      <p style={{paddingBottom: 30, opacity: .8, paddingTop: 50}} align='center'>
        © 2020 Website Created by Mason D Eyre
        <br/>
        <a href='mailto:mason.deyre@gmail.com' target='_blank' rel='noopener noreferrer'>
          mason.deyre@gmail.com
        </a>
        <br/>
        <a href='http://www.masoneyre.com' target='_blank' rel='noopener noreferrer'>
          www.masoneyre.com
        </a>
      </p>
    </div>
  </>
)

export default Contact;
