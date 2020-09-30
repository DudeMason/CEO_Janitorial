import React from 'react';
import { Link, withRouter, } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';
import { AuthConsumer, } from "../../providers/AuthProvider";

class Navbar extends React.Component {

	rightNavItems = () => {
		const {user, handleLogout} = this.props.auth;

		if (user) {
			return (
				<Menu position='right'>
					<Link to='/citas'>
						<Menu.Item name='appointments'>
						</Menu.Item>
					</Link>
					<Menu.Item name='logout' onClick={() => handleLogout(this.props.history)}>
					</Menu.Item>
				</Menu>
			)
		}
	}

	render() {
		return (

			<Menu stackable>

				<Link to='/'>
					<Menu.Item>
						<Icon name='home'/>
					</Menu.Item>
				</Link>
				{this.rightNavItems()}
				<Menu.Menu position='right'>
					<Link to='/about'>
						<Menu.Item>
							About
						</Menu.Item>
					</Link>

					<Link to='/photos'>
						<Menu.Item>
							Photos
						</Menu.Item>
					</Link>

					<Link to='/services'>
						<Menu.Item>
							Services
						</Menu.Item>
					</Link>

					<Link to='/contact'>
						<Menu.Item>
							<Icon name='phone'/>
							Contact
						</Menu.Item>
					</Link>
				</Menu.Menu>

			</Menu>
		)
	}
}

export class ConnectedNavbar extends React.Component {
	render() {
		return (
			<AuthConsumer>
				{auth =>
					<Navbar {...this.props} auth={auth}/>
				}
			</AuthConsumer>
		)
	}
}

export default withRouter(ConnectedNavbar);
