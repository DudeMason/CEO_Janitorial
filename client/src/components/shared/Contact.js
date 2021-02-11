import React from 'react';
import Ceo from './media/images/Ceo.png';
import AppointmentForm from './AppointmentForm';
import { Grid } from 'semantic-ui-react';

const Contact = () => (

	<>
		<div>
			<Grid columns='2' stackable>
				<Grid.Column>
					<AppointmentForm/>
				</Grid.Column>
				<Grid.Column>
					<img src={Ceo} className='bizCard' width='95%' alt='801-510-8656 -- ceojanitorial@gmail.com'/>
				</Grid.Column>
			</Grid>
		</div>
		<div className='watermarkZIndex'>
			<p style={{paddingBottom: 30, opacity: .8, paddingTop: 50}} align='center'>
			</p>
		</div>
	</>
)

export default Contact;
