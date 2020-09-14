import React from 'react';
import { Segment, Container } from 'semantic-ui-react';
import Ponytail from './media/images/Ponytail.jpg';
import Dusty from './media/images/Dusty.jpg';
import Hat from './media/images/Hat.jpg';
import Mask from './media/images/Mask.jpg';
import Tube from './media/images/Tube.jpg';
import Ceo from './media/videos/CEO.mov';
import Ceo1 from './media/videos/CEO1.mov';

const Services = () => (

  <div align='center' style={{height: '100vh'}}>
    <Container textAlign='justified'>
      <Segment style={{opacity: .95, padding: 25}}>
        <h1 align="center"><u>Services</u></h1>
        <h2>Disinfection</h2>
        <p>
          We use state-of-the-art disinfection technology to ensure a safe and
          healthy environment for you and your clients!
        </p>
        <img src={Ponytail} width="40%" style={{margin: 5}} alt='Fogging disinfector'/>
        <img src={Hat} width="40%" style={{margin: 5}} alt='Fogging disinfector'/>
        <img src={Dusty} width="40%" style={{margin: 5}} alt='Fogging disinfector'/>
        <img src={Mask} width="40%" style={{margin: 5}} alt='Fogging disinfector'/>
        <br/>
        <img src={Tube} width="81%" style={{margin: 5}} alt='Fogging disinfector'/>
        <br/>
        <video width="40%" controls style={{margin: 5}}>
          <source src={Ceo}/>
          Your browser does not support the video tag.
        </video>
        <video width="40%" controls style={{margin: 5}}>
          <source src={Ceo1}/>
          Your browser does not support the video tag.
        </video>
      </Segment>
    </Container>
  </div>
)

export default Services;
