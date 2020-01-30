import React, {useState} from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import AppointmentForm from './appointmentForm';

const [edit, toggleEdit] = useState(false)

const Appointment = ({
  last_name, first_name, phone1, phone2, phone3, email,
  company, date, time, message, removeAppoint, editAppoint
}) => (

  <>
    {
      edit
      ?
      <>
        <Grid stackable className='grid'>
          <Segment align='left'>
            <AppointmentForm editAppoint={editAppoint}/>
          </Segment>
        </Grid>
      </>
      :
      <Grid stackable className='grid'>
        <Segment align='left'>
          <u>Name</u>: {a.first_name} {a.last_name}
          <br/>
          <u>Phone</u>: {a.phone1} - {a.phone2} - {a.phone3}
          <br/>
          <u>Email</u>: {a.email}
          <br/>
          <u>Company</u>: {a.company}
          <br/>
          <u>Date</u>: {a.date}
          <br/>
          <u>Time</u>: {a.time}
          <br/>
          <u>Message</u>: {a.message}
        </Segment>
      </Grid>
    }
  </>
)

export default Appointment;
