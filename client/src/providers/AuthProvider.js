import React, { Component } from 'react';
import axios from 'axios';

const AuthContext = React.createContext(undefined, undefined);
export const AuthConsumer = AuthContext.Consumer;

class AuthProvider extends Component {
  state = { user: null, userCount: 2, registerable: false }

  componentDidMount() {
    axios.get('/api/users')
      .then( res => {
        if(res.data.length <= 1) {
          this.setState({ userCount: res.data.length, registerable: true })
        }
        console.log('Max users')
      })
      .catch( err => {
        console.log(err)
      })
  }

  handleRegister = (user, history) => {
    if (this.state.userCount < 2) {
      axios.post('/api/auth', user)
        .then( res => {
          this.setState({ user: res.data })
          history.push('/citas')
        })
        .catch(err => console.log(err))
    } else {
      console.log("Too many users.")
    }
  }  

  handleLogin = (user, history) => {
    axios.post('/api/auth/sign_in', user)
      .then( res => {
        this.setState({ user: res.data.data })
        history.push('/citas')
      })
      .catch(err => console.log(err))
  }

  handleLogout = (history) => {
    axios.delete('/api/auth/sign_out')
      .then( () => {
        this.setState({ user: null })
        history.push('/login')
      })
      .catch(err => console.log(err))
  }

  render(){
    return(
      <AuthContext.Provider value={{
        ...this.state,
        handleRegister: this.handleRegister,
        handleLogin: this.handleLogin,
        handleLogout: this.handleLogout,
        authenticated: this.state.user !== null,
        setUser: (user) => this.setState({ user })
      }}>
        { this.props.children }
      </AuthContext.Provider>
    )
  }
}

export default AuthProvider;
