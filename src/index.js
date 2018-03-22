import React, { Component } from "react";

import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { ConnectedRouter } from 'connected-react-router';

import App from "./containers/App";
import store, { history } from "./providerStore";

render(<Provider store={ store }>
		<ConnectedRouter history={history}> 
			<App /> 
		</ConnectedRouter>
	   </Provider>, document.getElementById('app')); 
