import React, { Component } from 'react';
import axios from 'axios';

const AuthContext = React.createContext(undefined, undefined);
export const AuthConsumer = AuthContext.Consumer;

class AuthProvider extends Component {
	state = {user: null, canRegister: false};

	componentDidMount() {
		axios.get('/api/users')
		.then(res => {
			if (res.data.length <= 1) {
				this.setState({canRegister: true});
			} else {
				this.setState({canRegister: false});
				console.log('Max users');
			}
		})
		.catch(err => {
			console.log(err);
		})
	}

	handleRegister = (user, history) => {
		axios.get('/api/users')
		.then(res => {
			if (res.data.length <= 1) {
				axios.post('/api/auth', user)
				.then(result => {
					this.setState({user: result.data});
					this.componentDidMount();
					history.push('/citas');
				})
				.catch(err => {
					console.log(err);
					alert('User already exists.');
				});
			} else {
				alert('Too many users.');
			}
		})
		.catch(err => {
			console.log(err);
		});
	}

	handleLogin = (user, history) => {
		axios.post('/api/auth/sign_in', user)
		.then(res => {
			this.setState({user: res.data.data});
			history.push('/citas');
		})
		.catch(() => {
			axios.get('/api/users')
			.then(res => {
				if (res.data.find(u => user.email === u.email)) {
					alert('Incorrect password.');
				} else {
					alert('Username does not exist.');
				}
			});
		});
	}

	handleLogout = (history) => {
		axios.delete('/api/auth/sign_out')
		.then(() => {
			this.setState({user: null});
			history.push('/login');
		})
		.catch(err => {
			console.log(err);
		});
	}

	render() {
		return (
			<AuthContext.Provider value={{
				...this.state,
				handleRegister: this.handleRegister,
				handleLogin: this.handleLogin,
				handleLogout: this.handleLogout,
				setUser: (user) => this.setState({user})
			}}>
				{this.props.children}
			</AuthContext.Provider>
		);
	}
}

export default AuthProvider;
