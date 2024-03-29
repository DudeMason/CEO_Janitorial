import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Button, Container } from 'semantic-ui-react';
import Emp1 from './media/images/Emp1.png';
import Emp2 from './media/images/Emp2.png';
import Emp3 from './media/images/Emp3.png';
import Emp4 from './media/images/Emp4.png';
import Bullfrog from './media/images/Bullfrog.JPG';
import Spas from './media/images/Spas.JPG';

const About = () => (

	<div style={{height: '100vh'}}>
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
			<Segment align='center' style={{opacity: .95}}>
				<h2>This is one of our larger clients</h2>
				<p>
					Bullfrog Spas is a large, well-known company who trusts CEO Janitorial
					with all their cleaning and disinfecting needs.
				</p>
				<img src={Bullfrog} width='90%' alt='Bullfrog Spas'/>
				<img src={Spas} width='90%' alt='Bullfrog Spas'/>
			</Segment>
			<br/>
			<Segment className='leaders' align='center' style={{opacity: .9}}>
				<p style={{fontSize: 25}}>
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
			<p style={{paddingBottom: 30, opacity: .8, paddingTop: 50}} align='center'>
			</p>
		</div>
	</div>
);

export default About;
