import React from 'react';
import {Segment, Grid} from 'semantic-ui-react';
import { AppointmentConsumer } from "../../providers/AppointmentProvider";

const Admin = ({ appoint: { appointments } }) => (

  <div align='center'>
    <Segment align='center' compact>
      <h1>Appointments</h1>
    </Segment>
    <br/>
    {
      appointments.map( a =>
        <Grid stackable className='grid'>
          <Segment align='left'>
            <u>Name</u>: {a.first_name} {a.last_name}
            <br/>
            <u>Phone</u>: {a.phone}
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
      )
    }
  </div>
)
export default class ConnectedAdmin extends React.Component {
  render() {
    return (
      <AppointmentConsumer>
        { value => <Admin { ...this.props } appoint={value} /> }
      </AppointmentConsumer>
    )
  }
}
