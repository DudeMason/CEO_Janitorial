import React from 'react';
import axios from 'axios';
import Appointments from '../shared/Appointments';

export default class Admin extends React.Component {

  state = { appointments: [ {first_name: 'heyo', last_name: 'yo', email: '', phone: 0, company: '', date: '', time: 0, message: ''}, ] }

  componentDidMount() {
    axios.get('/api/appointments')
      .then( res => {
        this.setState({ appointments: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }

  render() {

    const { appointments } = this.state

    return(

      <div align='center'>
      
      </div>
    )
  }
}
