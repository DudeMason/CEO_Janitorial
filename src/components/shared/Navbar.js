import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

class Navbar extends React.Component {
	render() {
		return (
			<Menu stackable>
				<Link to='/'>
					<Menu.Item>
						<Icon name='home'/>
					</Menu.Item>
				</Link>
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
		);
	}
}

export default withRouter(Navbar);
