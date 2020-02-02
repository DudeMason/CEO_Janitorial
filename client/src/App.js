import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/shared/Home';
import Contact from './components/shared/Contact';
import About from './components/shared/About';
import Photos from './components/shared/media/Photos';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Admin from './components/auth/Admin';
import { Segment } from 'semantic-ui-react';

const App = () => (

  <div className='background'>
    <Navbar />
    <FetchUser>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/photos' component={Photos}/>
        <ProtectedRoute exact path='/admin' component={Admin} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route component={NoMatch} />
      </Switch>
    </FetchUser>
    <p style={{paddingBottom: 30, opacity: .8, paddingTop: 40}} align='center'>
      © 2020 Website Created by Mason D Eyre
      <br/>
      <a href='mailto:mason.deyre@gmail.com' target='_blank'>
        mason.deyre@gmail.com
      </a>
    </p>
  </div>
)

export default App;
