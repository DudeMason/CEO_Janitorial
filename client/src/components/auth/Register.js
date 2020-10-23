import React from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import { Button, Form, Segment, Header } from 'semantic-ui-react';

class Register extends React.Component {
	state = {email: '', password: '', passwordConfirmation: ''};

	handleSubmit = (e) => {
		e.preventDefault();
		const {email, password, passwordConfirmation} = this.state;
		const {auth: {handleRegister,}, history,} = this.props;

		if (!/.@\w+\.[^0-9]{2}/i.test(email)){
			alert('Must be an email address');
			return;
		}

		if (password !== passwordConfirmation) {
			alert('Passwords Do Not Match!');
			return;
		}

		if (password.length < 6) {
			alert('Password is too short.');
			return;
		}

		handleRegister({email, password, passwordConfirmation}, history);
	}

	handleChange = (e) => {
		const {name, value} = e.target;
		this.setState({[name]: value});
	}

	render() {
		const {email, password, passwordConfirmation} = this.state;

		return (
			<div style={{height: '100vh'}} align='center'>
				<Segment compact style={{opacity: .9, width: '70%'}} align='center'>
					<Header as='h1' textAlign='center'>Register</Header>
					<Form onSubmit={this.handleSubmit} style={{width: '90%'}}>
						<Form.Input
							label="Email"
							required
							autoFocus
							name='email'
							value={email}
							placeholder='Email'
							onChange={this.handleChange}
						/>
						<Form.Input
							label="Password"
							required
							name='password'
							value={password}
							placeholder='Password'
							type='password'
							onChange={this.handleChange}
						/>
						<Form.Input
							label="Password Confirmation"
							required
							name='passwordConfirmation'
							value={passwordConfirmation}
							placeholder='Password Confirmation'
							type='password'
							onChange={this.handleChange}
						/>
						<Segment textAlign='center' basic>
							<Button primary fluid type='submit'>Submit</Button>
						</Segment>
					</Form>
				</Segment>
			</div>
		);
	}
}

const ConnectedRegister = (props) => (
	<AuthConsumer>
		{auth => <Register {...props} auth={auth}/>}
	</AuthConsumer>
);
export default ConnectedRegister
