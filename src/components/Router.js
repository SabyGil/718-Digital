import React from 'react';
import {
	Route,
	BrowserRouter as Router
} from 'react-router-dom';
import FullpageParent from './FullpageParent';
import { Provider } from '../context';

const Routes = () => (
	<Provider>
		<Router>
	    <React.Fragment>
	      {/* <Route path='/' render={() => <FullpageWrapper {...fullpageOptions}/> }/> */}
	      <Route path='/' component={FullpageParent}/>
	    </React.Fragment>
	  </Router>
	</Provider>
);

export default Routes;
