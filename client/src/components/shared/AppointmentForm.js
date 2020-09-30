import React, { Component } from 'react';
import { AppointmentConsumer } from "../../providers/AppointmentProvider";
import { Button, Icon } from 'semantic-ui-react';
import axios from 'axios';

class AppointmentForm extends Component {

	state = {
		first_name: undefined, last_name: undefined, phone1: undefined, phone2: undefined, phone3: undefined,
		email: undefined, company: undefined, date: undefined, time: undefined, message: undefined
	}

	componentDidMount() {
		const {first, last, date, time, email, message, phone1, phone2, phone3, company} = this.props
		this.setState({
			first_name: first, last_name: last,
			phone1: phone1, phone2: phone2, phone3: phone3,
			email: email, date: date, company: company,
			time: time, message: message,
		})
	}

	handleSubmit = () => {
		if (this.props.id) {
			this.props.editAppoint(this.props.id, this.state)
			this.props.toggleEdit(!this.props.edit)
		} else {
			this.props.appoint.addAppoint(this.state)
			this.emailSubmit(this.state.email)
		}
		this.setState({
			first_name: undefined, last_name: undefined, phone1: undefined, phone2: undefined, phone3: undefined,
			email: undefined, company: undefined, date: 0, time: 0, message: undefined
		})
	}

	handleChange = (e) => {
		const {name, value} = e.target
		this.setState({[name]: value})
	}

	emailSubmit = (email) => {
		const params = {...this.state, email}
		axios.post('/api/appointment_senders', params)
		.then(res => {
			return res.data
		})
		.catch(err => {
			console.log(err)
		})
	}

	render() {
		const {first_name, last_name, email, phone1, phone2, phone3, company, date, time, message} = this.state
		return (
			<div>
				{
					this.props.edit
						?
						<div className='appointmentForm'>
							<form onSubmit={this.handleSubmit}>
								<label htmlFor='firstName' style={{fontSize: 15}}>Name</label>
								<br/>
								<input type="text" id='firstName' name='first_name' value={first_name} onChange={this.handleChange}
											 placeholder='First Name' required/>
								&nbsp;&nbsp;&nbsp;
								<input type="text" name='last_name' value={last_name} onChange={this.handleChange}
											 placeholder='Last Name'/>
								<br/>
								<label htmlFor='number' style={{fontSize: 15}}>Phone</label>
								<br/>
								<input type="tel" id='number' className='phoneNumber' maxLength="3" name='phone1' value={phone1}
											 onChange={this.handleChange} placeholder='000' required/>
								&nbsp; - &nbsp;
								<input type="tel" className='phoneNumber' name='phone2' value={phone2} onChange={this.handleChange}
											 placeholder='000' maxLength="3" required/>
								&nbsp; - &nbsp;
								<input type="tel" className='phoneNumbers' name='phone3' value={phone3} onChange={this.handleChange}
											 placeholder='0000' maxLength="4" required/>
								<br/>
								<label htmlFor='email' style={{fontSize: 15}}>Email</label>
								<br/>
								<input type="text" id='email' placeholder='Email' name='email' value={email}
											 onChange={this.handleChange} size='40' required/>
								<br/>
								<label htmlFor='company' style={{fontSize: 15}}>Company</label>
								<br/>
								<input type="text" id='company' name='company' value={company} onChange={this.handleChange}
											 placeholder='Company Name' size='40'/>
								<br/>
								<label htmlFor='date' style={{fontSize: 15}}>Date</label>
								<br/>
								<input id='date' type='date' name='date' value={date} min='2020-01-01' onChange={this.handleChange}/>
								<br/>
								<label htmlFor='time' style={{fontSize: 15}}>Time</label>
								<br/>
								<input id='time' type='time' min='08:00:00' max='20:00:00' name='time' value={time}
											 onChange={this.handleChange}/>
								<br/>
								<label htmlFor='message'>Message:</label>
								<br/>
								<textarea id='message' type='textarea' rows="5" cols="40" name='message' value={message}
													onChange={this.handleChange} placeholder='Your message here'/>
								<br/>
								<input type="submit" value="Submit"/>
								<Button color='red' floated='right' onClick={() => {
									this.props.removeAppoint(this.props.id);
									this.props.toggleEdit(!this.props.edit);
								}}>
									<Icon name='trash'/>
								</Button>
								<Button color='blue' floated='right' onClick={() => this.props.toggleEdit(!this.props.edit)}>
									<Icon name='pencil'/>
								</Button>
							</form>
						</div>
						:
						<div className='appointmentForm'>
							<h1>Set an Appointment</h1>
							<p>
								We'll send you an email confirmation. You may need to <u>check your spam folder</u>.
								<br/>
								We are a Utah company and cannot accommodate appointments outside of Utah.
							</p>
							<form onSubmit={this.handleSubmit}>
								<label htmlFor='firstName' style={{fontSize: 15}}>Name</label>
								<br/>
								<input type="text" id='firstName' name='first_name' value={first_name} onChange={this.handleChange}
											 placeholder='First Name' required/>
								&nbsp;&nbsp;&nbsp;
								<input type="text" name='last_name' value={last_name} onChange={this.handleChange}
											 placeholder='Last Name'/>
								<br/>
								<label htmlFor='number' style={{fontSize: 15}}>Phone</label>
								<br/>
								<input type="tel" id='number' className='phoneNumber' maxLength="3" name='phone1' value={phone1}
											 onChange={this.handleChange} placeholder='000' required/>
								&nbsp; - &nbsp;
								<input type="tel" className='phoneNumber' name='phone2' value={phone2} onChange={this.handleChange}
											 placeholder='000' maxLength="3" required/>
								&nbsp; - &nbsp;
								<input type="tel" className='phoneNumbers' name='phone3' value={phone3} onChange={this.handleChange}
											 placeholder='0000' maxLength="4" required/>
								<br/>
								<label htmlFor='email' style={{fontSize: 15}}>Email</label>
								<br/>
								<input type="text" id='email' placeholder='Email' name='email' value={email}
											 onChange={this.handleChange} size='40' required/>
								<br/>
								<label htmlFor='company' style={{fontSize: 15}}>Company</label>
								<br/>
								<input type="text" id='company' name='company' value={company} onChange={this.handleChange}
											 placeholder='Company Name' size='40'/>
								<br/>
								<label htmlFor='date' style={{fontSize: 15}}>Date</label>
								<br/>
								<input id='date' type='date' name='date' value={date} min='2020-01-01' onChange={this.handleChange}
											 required/>
								<br/>
								<label htmlFor='time' style={{fontSize: 15}}>Time</label>
								<br/>
								<input id='time' type='time' min='08:00:00' max='20:00:00' name='time' value={time}
											 onChange={this.handleChange} required/>
								<br/>
								<label htmlFor='message'>Message:</label>
								<br/>
								<textarea id='message' type='textarea' rows="5" cols="40" name='message' value={message}
													onChange={this.handleChange} placeholder='Your message here'/>
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
				{value => <AppointmentForm {...this.props} appoint={value}/>}
			</AppointmentConsumer>
		)
	}
}
