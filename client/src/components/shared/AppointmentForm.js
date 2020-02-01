import React, {Component} from 'react';
import { AppointmentConsumer } from "../../providers/AppointmentProvider";
import { Button, Icon } from 'semantic-ui-react';

class AppointmentForm extends Component {

  state = {
    first_name: '', last_name: '', phone1: undefined, phone2: undefined, phone3: undefined,
    email: '', company: '', date: 0, time: 0, message: ''
  }

  componentDidMount() {
    const {first, last, date, time, email, message, phone1, phone2, phone3, company} = this.props
    this.setState({
      first_name: first, last_name:  last,
      phone1: phone1, phone2: phone2, phone3: phone3,
      email: email, date: date, company: company,
      time: time, message: message,
     })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      this.props.editAppoint( this.props.id, this.state )
      this.props.toggleEdit(!this.props.edit)
    }
    else {
      this.props.appoint.addAppoint(this.state)
    }
    this.setState({
      first_name: '', last_name: '', phone1: '', phone2: '', phone3: '',
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
      <div style={{height: '100vh'}}>
        {
          this.props.edit
          ?
          <div className='appointmentForm'>
            <h1>Set an Appointment</h1>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor='firstName' style={{fontSize: 15}}>Name</label>
              <br/>
              <input type="text" id='firstName' name='first_name' value={first_name} onChange={this.handleChange} placeholder='First Name' size='30' required/>
              &nbsp;&nbsp;&nbsp;
              <input type="text" name='last_name' value={last_name} onChange={this.handleChange} placeholder='Last Name' size='40'/>
              <br/>
              <label htmlFor='number' style={{fontSize: 15}}>Phone</label>
              <br/>
              <input type="text" id='number' className='phoneNumber' maxLength="3" name='phone1' value={phone1} onChange={this.handleChange} placeholder='000' required/>
              &nbsp; - &nbsp;
              <input type="text" className='phoneNumber' name='phone2' value={phone2} onChange={this.handleChange} placeholder='000' maxLength="3" required/>
              &nbsp; - &nbsp;
              <input type="text" className='phoneNumbers' name='phone3' value={phone3} onChange={this.handleChange} placeholder='0000' maxLength="4" required/>
              <br/>
              <label htmlFor='email' style={{fontSize: 15}}>Email</label>
              <br/>
              <input type="text" id='email' placeholder='Email' name='email' value={email} onChange={this.handleChange} size='40' required/>
              <br/>
              <label htmlFor='company' style={{fontSize: 15}}>Company</label>
              <br/>
              <input type="text" id='company' name='company' value={company} onChange={this.handleChange} placeholder='Company Name' size='40'/>
              <br/>
              <label htmlFor='date' style={{fontSize: 15}}>Date</label>
              <br/>
              <input id='date' type='date' name='date' value={date} onChange={this.handleChange} />
              <br/>
              <label htmlFor='time' style={{fontSize: 15}}>Time</label>
              <br/>
              <input id='time' type='time' min='06:00:00' max='21:00:00' name='time' value={time} onChange={this.handleChange} />
              <br/>
              <label htmlFor='message'>Message:</label>
              <br/>
              <textarea id='message' type='textarea' rows="5" cols="50" name='message' value={message} onChange={this.handleChange} placeholder='Your message here'/>
              <br/>
              <input type="submit" value="Submit"/>
              <Button color='red' floated='right' onClick={() => {this.props.removeAppoint(this.props.id); this.props.toggleEdit(!this.props.edit);}}><Icon name='trash'/></Button>
              <Button color='blue' floated='right' onClick={() => this.props.toggleEdit(!this.props.edit)}><Icon name='pencil'/></Button>
            </form>
          </div>
          :
          <div className='appointmentForm'>
            <h1>Set an Appointment</h1>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor='firstName' style={{fontSize: 15}}>Name</label>
              <br/>
              <input type="text" id='firstName' name='first_name' value={first_name} onChange={this.handleChange} placeholder='First Name' size='30' required/>
              &nbsp;&nbsp;&nbsp;
              <input type="text" name='last_name' value={last_name} onChange={this.handleChange} placeholder='Last Name' size='40'/>
              <br/>
              <label htmlFor='number' style={{fontSize: 15}}>Phone</label>
              <br/>
              <input type="text" id='number' className='phoneNumber' maxLength="3" name='phone1' value={phone1} onChange={this.handleChange} placeholder='000' required/>
              &nbsp; - &nbsp;
              <input type="text" className='phoneNumber' name='phone2' value={phone2} onChange={this.handleChange} placeholder='000' maxLength="3" required/>
              &nbsp; - &nbsp;
              <input type="text" className='phoneNumbers' name='phone3' value={phone3} onChange={this.handleChange} placeholder='0000' maxLength="4" required/>
              <br/>
              <label htmlFor='email' style={{fontSize: 15}}>Email</label>
              <br/>
              <input type="text" id='email' placeholder='Email' name='email' value={email} onChange={this.handleChange} size='40' required/>
              <br/>
              <label htmlFor='company' style={{fontSize: 15}}>Company</label>
              <br/>
              <input type="text" id='company' name='company' value={company} onChange={this.handleChange} placeholder='Company Name' size='40'/>
              <br/>
              <label htmlFor='date' style={{fontSize: 15}}>Date</label>
              <br/>
              <input id='date' type='date' name='date' value={date} min='2020-02-01' max='2022-01-01' onChange={this.handleChange} required/>
              <br/>
              <label htmlFor='time' style={{fontSize: 15}}>Time</label>
              <br/>
              <input id='time' type='time' min='06:00:00' max='21:00:00' name='time' value={time} onChange={this.handleChange} required/>
              <br/>
              <label htmlFor='message'>Message:</label>
              <br/>
              <textarea id='message' type='textarea' rows="5" cols="50" name='message' value={message} onChange={this.handleChange} placeholder='Your message here'/>
              <br/>
              <input type="submit" value="Submit"/>
            </form>
          </div>
        }
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
