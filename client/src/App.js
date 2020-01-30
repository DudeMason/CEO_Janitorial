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

const App = () => (

  <div className='background' style={{paddingBottom: 30}}>
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
  </div>
)

export default App;
