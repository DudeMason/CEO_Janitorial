import React, {useState} from 'react';
import { Segment, Grid, Button, Icon } from 'semantic-ui-react';
import AppointmentForm from './AppointmentForm';

function Appointment({
  appoint, id, first_name, last_name, phone1, phone2, phone3, company, email, date, time, message,
  appoint: {editAppoint, removeAppoint, appointments}
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
          <Grid.Column>
            <Segment align='left'>
              <AppointmentForm key={id}
                first={first_name}
                last={last_name}
                phone1={phone1}
                phone2={phone2}
                phone3={phone3}
                company={company}
                email={email}
                date={date.slice(0, 10)}
                time={time}
                message={message}
                editAppoint={editAppoint}
                removeAppoint={removeAppoint}
                edit={edit}
                id={id}
                toggleEdit={toggleEdit}
              />
            </Segment>
          </Grid.Column>
        </>
        :
        <Grid.Column>
          <Segment align='left'>
            <u>Name</u>:
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {first_name} {last_name}
            <br/>
            <u>Phone</u>:
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {phone1} - {phone2} - {phone3}
            <br/>
            <u>Email</u>:
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {email}
            <br/>
            <u>Company</u>:
              {company}
            <br/>
            <u>Date</u>:
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {realDate}
            <br/>
            <u>Time</u>:
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              {time}
            <br/>
            <u>Message</u>:
              {message}
            <br/>
            <br/>
            <Button color='blue' onClick={() => toggleEdit(!edit)}><Icon name='pencil'/></Button>
            <Button color='red' onClick={() => removeAppoint(id)}><Icon name='trash'/></Button>
          </Segment>
        </Grid.Column>
      }
    </>
  )
}

export default Appointment;
