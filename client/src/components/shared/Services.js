import React from 'react';
import { Segment, Container } from 'semantic-ui-react';

const Services = () => (

  <div align='center' style={{height: '100vh'}}>
    <Container textAlign='justified'>
      <Segment style={{opacity: .9, padding: 25}}>
        <h2>Services</h2>
        <p>
          We are a small company;
          however, we have 5 years of experience in the professional cleaning business.
          We are equipped with all the supplies and materials required to service large clients.
          I personally have managed multiple operations servicing dozens
          of corporate accounts and maintained the team as well as the relationships.
          We are licensed, insured, and staffed appropriately to service businesses.
        </p>
      </Segment>
    </Container>
  </div>
)

export default Services;
