import React from 'react';
import {Segment} from 'semantic-ui-react';

const NoMatch = () => (

  <div align='center' style={{height: '100vh'}}>
    <Segment compact align='center' style={{padding: 100}}>
      <p>
        404 Error, this URL doesn't exist!
        <br/>
        Try another.
      </p>
      <a href='/'><u>Return Home</u></a>
    </Segment>
    <p style={{paddingBottom: 30, opacity: .8, paddingTop: 50}} align='center'>
      © 2020 Website Created by Mason D Eyre
      <br/>
      <a href='mailto:mason.deyre@gmail.com' target='_blank' rel='noopener noreferrer'>
        mason.deyre@gmail.com
      </a>
      <br/>
      <a href='https://www.masoneyre.com' target='_blank' rel='noopener noreferrer'>
        www.masoneyre.com
      </a>
    </p>
  </div>
)

export default NoMatch;
