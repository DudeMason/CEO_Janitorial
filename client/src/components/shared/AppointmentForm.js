import React, {Component} from 'react';
import { AppointmentConsumer } from "../../providers/AppointmentProvider";

class AppointmentForm extends Component {

  state = {
    first_name: '', last_name: '', phone1: 0, phone2: 0, phone3: 0,
    email: '', company: '', date: 0, time: 0, message: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addAppoint(this.state)
    this.setState({
      first_name: '', last_name: '', phone1: 0, phone2: 0, phone3: 0,
      email: '', company: '', date: 0, time: 0, message: ''
    })
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  render() {
    const{ first_name, last_name, email, phone, company, date, time, message } = this.state
    return(
      <div className='appointmentForm'>
        <div>
          <h1>Set an Appointment</h1>
          <form>
            <label htmlFor='firstName' style={{fontSize: 15}}>Name</label>
            <br/>
            <input type="text" id='firstName' name='first_name' value={first_name} placeholder='First Name' size='30' required/>
            &nbsp;&nbsp;&nbsp;
            <input type="text" name='last_name' value={last_name} placeholder='Last Name' size='30'/>
            <br/>
            <br/>
            <label htmlFor='number' style={{fontSize: 15}}>Phone</label>
            <br/>
            <input type="text" id='number' className='phoneNumber' maxLength="3" name='phone1' value={phone1} placeholder='000' required/>
            &nbsp; - &nbsp;
            <input type="text" className='phoneNumber' name='phone2' value={phone2} placeholder='000' maxLength="3" required/>
            &nbsp; - &nbsp;
            <input type="text" className='phoneNumbers' name='phone3' value={phone3} placeholder='0000' maxLength="4" required/>
            <br/>
            <br/>
            <label htmlFor='email' style={{fontSize: 15}}>Email</label>
            <br/>
            <input type="text" id='email' placeholder='Email' size='30' required/>
            <br/>
            <br/>
            <label htmlFor='company' style={{fontSize: 15}}>Company</label>
            <br/>
            <input type="text" id='company' placeholder='Company Name' size='30'/>
            <br/>
            <br/>
            <label htmlFor='date' style={{fontSize: 15}}>Date</label>
            <br/>
            <input id='date' type='date' />
            <br/>
            <br/>
            <label htmlFor='time' style={{fontSize: 15}}>Time</label>
            <br/>
            <input id='time' type='time' min='06:00:00' max='21:00:00'/>
            <br/>
            <br/>
            <label htmlFor='message'>Message:</label>
            <br/>
            <textarea id='message' rows="5" cols="40" placeholder='Your message here'/>
            <br/>
            <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    )
  }
}
export default class ConnectedAppointmentForm extends React.Component {
  render() {
    return (
      <AppointmentConsumer>
        { value => <AppointmentForm { ...this.props } appoint={value}/> }
      </AppointmentConsumer>
    )
  }
}
