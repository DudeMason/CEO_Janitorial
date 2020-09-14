import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/shared/Home';
import Contact from './components/shared/Contact';
import About from './components/shared/About';
import Photos from './components/shared/media/Photos';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import Login from './components/auth/Login';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Admin from './components/auth/Admin';
import Services from './components/shared/Services';

const App = () => (

  <div className='background'>
    <Navbar />
    <FetchUser>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/photos' component={Photos}/>
        <Route exact path='/manejarcitas' component={Admin}/>
        <Route exact path='/services' component={Services}/>
        <Route component={NoMatch}/>
      </Switch>
    </FetchUser>
  </div>
)

export default App;
