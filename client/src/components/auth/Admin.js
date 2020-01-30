import React from 'react';
import { Segment } from 'semantic-ui-react';
import { AppointmentConsumer } from "../../providers/AppointmentProvider";

const Admin = ({ appoint: { appointments, editAppoint, removeAppoint } }) => (

  <div align='center'>
    <Segment align='center' compact>
      <h1>Appointments</h1>
    </Segment>
    <br/>
    {
      appointments.map( a =>
        <Appointment key={a.id} {...a} editAppoint={editAppoint} removeAppoint={removeAppoint}/>
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
