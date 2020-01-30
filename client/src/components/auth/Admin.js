import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import { AppointmentConsumer } from "../../providers/AppointmentProvider";
import Appointment from '../shared/Appointment';

const Admin = ({ appoint: {appointments}, appoint }) => (

  <div align='center'>
    <Segment align='center' compact>
      <h1>Appointments</h1>
    </Segment>
    <br/>
    <Grid columns='3' stackable className='grid'>
    {
      appointments.map( a =>
        <Appointment key={a.id} {...a} appoint={appoint} appointments={appointments}/>
      )
    }
    </Grid>
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
