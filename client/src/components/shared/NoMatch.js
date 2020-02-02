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
  </div>
)

export default NoMatch;
