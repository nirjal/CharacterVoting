import React from 'react';
import {Route, Router} from 'react-router';
import App from './components/App';
import Home from './components/Home';

export default (
	<Route component={App}>
		<Route path='/' component={Home} />
	</Route>	
);