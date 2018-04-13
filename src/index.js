import React, { Component } from "react";

import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Router } from 'react-router';
import 'normalize.css';

import App from "./containers/App";
import store, { history } from "./providerStore";

// Import CSS reset and Global Styles
import './global-style';


render(<Provider store={ store }>
		<Router history={history}> 
			<App /> 
		</Router>
	   </Provider>, document.getElementById('app')); 
