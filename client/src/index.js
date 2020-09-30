import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import AuthProvider from './providers/AuthProvider';
import AppointmentProvider from './providers/AppointmentProvider';
import { initMiddleware } from 'devise-axios';

initMiddleware();

ReactDOM.render(
	<AuthProvider>
		<AppointmentProvider>
			<BrowserRouter>
				<App/>
			</BrowserRouter>
		</AppointmentProvider>
	</AuthProvider>,

	document.getElementById('root'));
