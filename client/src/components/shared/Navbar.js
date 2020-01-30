import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

const Navbar = () => (

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

      <Link to='/contact'>
        <Menu.Item>
          <Icon name='phone'/>
          Contact
        </Menu.Item>
      </Link>
    </Menu.Menu>

  </Menu>
)

export default Navbar;
