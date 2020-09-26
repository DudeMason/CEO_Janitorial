import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/shared/Home';
import Contact from './components/shared/Contact';
import About from './components/shared/About';
import Photos from './components/shared/media/Photos';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import FetchUser from './components/auth/FetchUser';
import Admin from './components/auth/Admin';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Services from './components/shared/Services';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { AuthConsumer, } from "./providers/AuthProvider";


const App = ({registerable}) => (
  <div className='background'>
    <Navbar />
    <FetchUser>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/photos' component={Photos}/>
        <ProtectedRoute exact path='/citas' component={Admin}/>
        <Route exact path='/login' component={Login}/>
        {registerable ? <Route exact path='/register' component={Register}/> : null}
        <Route exact path='/services' component={Services}/>
        <Route component={NoMatch}/>
      </Switch>
    </FetchUser>
  </div>
)

const ConnectedApp = () => {
  return(
    <AuthConsumer>
    {
      value => (
        <App registerable={value.registerable} />
      )
    }
    </AuthConsumer>
  )
}
export default ConnectedApp;
