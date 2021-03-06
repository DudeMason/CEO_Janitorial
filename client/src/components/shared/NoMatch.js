import React from 'react';
import { Segment } from 'semantic-ui-react';

const NoMatch = () => (

	<div align='center' style={{height: '100vh'}}>
		<Segment compact align='center' style={{padding: 100}}>
			<h2>404 Error</h2>
			<p>
				This URL doesn't exist!
				<br/>
			</p>
			<a href='/'><u>Return Home</u></a>
		</Segment>
	</div>
);

export default NoMatch;
