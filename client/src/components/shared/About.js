import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Button, Container } from 'semantic-ui-react';
import Emp1 from './media/images/Emp1.png'
import Emp2 from './media/images/Emp2.png'
import Emp3 from './media/images/Emp3.png'
import Emp4 from './media/images/Emp4.png'

const About = () => (

  <div style={{height: '150vh'}}>
    <Container textAlign='justified'>
    <Segment style={{opacity: .9, padding: 25}}>
      <h2>CEO Janitorial</h2>
      <p>
        We are a small company;
        however, we have 5 years of experience in the professional cleaning business.
        We are equipped with all the supplies and materials required to service large clients.
        I personally have managed multiple operations servicing dozens
        of corporate accounts and maintained the team as well as the relationships.
        We are licensed, insured, and staffed appropriately to service businesses.
      </p>
    </Segment>
    <br/>
    <Segment className='leaders' align='center' style={{opacity: .9}}>
      <p>
        <u>Here are of few of our great leaders</u>
      </p>
      <img src={Emp4} width='250' alt='Juan Leon'/>
      <img src={Emp3} width='250' alt='Johanna Hernandez'/>
      <img src={Emp2} width='250' alt='Daniel Gomez'/>
      <img src={Emp1} width='250' alt='Zarayen Oviedo'/>
    </Segment>
    <br/>
    </Container>
    <div align='center'>
      <Link to='/photos'>
        <Button size='huge' color='facebook'>
          Photos
        </Button>
      </Link>
    </div>
  </div>
)

export default About;
