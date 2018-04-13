import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home';
import NotFound from '../NotFound';
import { HomeHeader } from '../../components/Header';

export default function App(){
  return (
  	<div>
  		<Helmet
  			titleTemplate="%s - Website"
  			defaultTtitle="Website">
  			<meta name="description" content="Website"/> 
		  </Helmet>
      <HomeHeader /> 
	    <div>
	      <Switch>
	        <Route exact path="/" component={Home} /> 
	        <Route component={NotFound} /> 
	      </Switch>   
	    </div> 
    </div>
  );
}