import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import { AppointmentConsumer } from "../../providers/AppointmentProvider";
import Appointment from '../shared/Appointment';

const Admin = ({ functions: {appointments}, functions }) => (

  <div align='center' style={{height: '100vh'}}>
    <Segment align='center' compact>
      <h1>Appointments</h1>
    </Segment>
    <br/>
    <Grid columns='3' stackable className='grid'>
    {
      appointments.map( a =>
        <Appointment key={a.id} {...a} functions={functions} />
      )
    }
    </Grid>
  </div>
)
export default class ConnectedAdmin extends React.Component {
  render() {
    return (
      <AppointmentConsumer>
        { value => <Admin { ...this.props } functions={value} /> }
      </AppointmentConsumer>
    )
  }
}
