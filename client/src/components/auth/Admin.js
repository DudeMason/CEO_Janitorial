import React from 'react';
import axios from 'axios';
import { Segment, Grid } from 'semantic-ui-react';
import { AppointmentConsumer } from "../../providers/AppointmentProvider";
import Appointment from '../shared/Appointment';

class Admin extends React.Component{

  state = { appointments: [] }

  componentDidMount() {
    axios.get('/api/appointments')
      .then( res => {
        this.setState({ appointments: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }

  componentDidUpdate() {
    axios.get('/api/appointments')
      .then( res => {
        this.setState({ appointments: res.data })
      })
      .catch( err => {
        console.log(err)
      })  
  }

  render(){
    const { functions } = this.props
    const { appointments } = this.state

    return(

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
  }
}

export default class ConnectedAdmin extends React.Component {
  render() {
    return (
      <AppointmentConsumer>
        { value => <Admin { ...this.props } functions={value} /> }
      </AppointmentConsumer>
    )
  }
}
