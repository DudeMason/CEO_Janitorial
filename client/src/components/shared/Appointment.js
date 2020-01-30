import React, {useState} from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import AppointmentForm from './AppointmentForm';

function Appointment({
  appoint, first_name, last_name, phone1, phone2, phone3, company, email, date, time, message,
  appoint: {editAppoint, removeAppoint}
}) {

  const [edit, toggleEdit] = useState(false)
  let appDate = new Date(`${date}`);
  let realDate = parseInt(appDate.getUTCMonth()+1) +"/"+ appDate.getUTCDate() +"/"+ appDate.getUTCFullYear();

  return(
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
            <u>Name</u>: {first_name} {last_name}
            <br/>
            <u>Phone</u>: {phone1} - {phone2} - {phone3}
            <br/>
            <u>Email</u>: {email}
            <br/>
            <u>Company</u>: {company}
            <br/>
            <u>Date</u>: {realDate}
            <br/>
            <u>Time</u>: {time}
            <br/>
            <u>Message</u>: {message}
          </Segment>
        </Grid>
      }
    </>
  )
}

export default Appointment;
