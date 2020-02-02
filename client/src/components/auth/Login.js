import React from 'react';
import { AuthConsumer, } from "../../providers/AuthProvider";
import { Button, Form, Segment, Header, } from 'semantic-ui-react';

class Login extends React.Component {
  state = { email: '', password: '' }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.auth.handleLogin(this.state, this.props.history);
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  render() {
    const { email, password, } = this.state;

    return (
      <div style={{height: '100vh'}} align='center'>
        <Segment compact style={{opacity: .9, width: '70%'}} align='center'>
          <Header as='h1' textAlign='center'>Login</Header>
          <Form onSubmit={this.handleSubmit} style={{width: '90%'}}>
            <Form.Input
              label="Email"
              autoFocus
              required
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
            <Segment textAlign='center' basic>
              <Button primary fluid type='submit'>Submit</Button>
            </Segment>
          </Form>
        </Segment>
      </div>
    )
  }
}

export default class ConnectedLogin extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}
