import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home';
import NotFound from '../NotFound';

const App = () => {
  return (
  	<div>
  		<Helmet
  			titleTemplate="%s - Website"
  			defaultTtitle="Website">
  			<meta name="description" content="Website"/> 
		</Helmet>
	    <div>
	      <Switch>
	        <Route exact path="/" component={Home} />
	        <Route path="*" component={NotFound} />
	      </Switch> 
	    </div> 
    </div>
  );
}

export default App;