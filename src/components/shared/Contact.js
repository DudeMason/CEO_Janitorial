import React from 'react';
import Ceo from './media/images/Ceo.png';
import { Grid } from 'semantic-ui-react';

const Contact = () => (

	<>
		<div>
			<Grid>
				<Grid.Column>
					<img src={Ceo} className='bizCard' alt='801-510-8656 -- ceojanitorial@gmail.com'/>
				</Grid.Column>
			</Grid>
		</div>
	</>
)

export default Contact;
