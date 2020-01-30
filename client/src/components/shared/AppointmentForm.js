import React, {Component} from 'react';
import { AppointmentConsumer } from "../../providers/AppointmentProvider";

class AppointmentForm extends Component {

  state = {
    first_name: '', last_name: '', phone1: undefined, phone2: undefined, phone3: undefined,
    email: '', company: '', date: 0, time: 0, message: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.appoint.addAppoint(this.state)
    this.setState({
      first_name: '', last_name: '', phone1: undefined, phone2: undefined, phone3: undefined,
      email: '', company: '', date: 0, time: 0, message: ''
    })
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  render() {
    const{ first_name, last_name, email, phone1, phone2, phone3, company, date, time, message } = this.state
    return(
      <div>
        <div className='appointmentForm'>
          <h1>Set an Appointment</h1>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='firstName' style={{fontSize: 15}}>Name</label>
            <br/>
            <input type="text" id='firstName' name='first_name' value={first_name} onChange={this.handleChange} placeholder='First Name' size='30' required/>
            &nbsp;&nbsp;&nbsp;
            <input type="text" name='last_name' value={last_name} onChange={this.handleChange} placeholder='Last Name' size='40'/>
            <br/>
            <br/>
            <label htmlFor='number' style={{fontSize: 15}}>Phone</label>
            <br/>
            <input type="text" id='number' className='phoneNumber' maxLength="3" name='phone1' value={phone1} onChange={this.handleChange} placeholder='000' required/>
            &nbsp; - &nbsp;
            <input type="text" className='phoneNumber' name='phone2' value={phone2} onChange={this.handleChange} placeholder='000' maxLength="3" required/>
            &nbsp; - &nbsp;
            <input type="text" className='phoneNumbers' name='phone3' value={phone3} onChange={this.handleChange} placeholder='0000' maxLength="4" required/>
            <br/>
            <br/>
            <label htmlFor='email' style={{fontSize: 15}}>Email</label>
            <br/>
            <input type="text" id='email' placeholder='Email' name='email' value={email} onChange={this.handleChange} size='40' required/>
            <br/>
            <br/>
            <label htmlFor='company' style={{fontSize: 15}}>Company</label>
            <br/>
            <input type="text" id='company' name='company' value={company} onChange={this.handleChange} placeholder='Company Name' size='40'/>
            <br/>
            <br/>
            <label htmlFor='date' style={{fontSize: 15}}>Date</label>
            <br/>
            <input id='date' type='date' name='date' value={date} onChange={this.handleChange} />
            <br/>
            <br/>
            <label htmlFor='time' style={{fontSize: 15}}>Time</label>
            <br/>
            <input id='time' type='time' min='06:00:00' max='21:00:00' name='time' value={time} onChange={this.handleChange} />
            <br/>
            <br/>
            <label htmlFor='message'>Message:</label>
            <br/>
            <textarea id='message' type='textarea' rows="5" cols="50" name='message' value={message} onChange={this.handleChange} placeholder='Your message here'/>
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
