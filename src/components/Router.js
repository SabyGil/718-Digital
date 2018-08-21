import React from 'react';
import {
	Route,
	BrowserRouter as Router
} from 'react-router-dom';
// import FullpageWrapper from './Fullpage';
import FullpageParent from './FullpageParent';


const Routes = () => (
	<Router>
    <React.Fragment>
      {/* <Route path='/' render={() => <FullpageWrapper {...fullpageOptions}/> }/> */}
      {/* <Route path='/' render={() => <FullpageParent /> }/> */}
      <Route path='/' component={FullpageParent}/>
    </React.Fragment>
  </Router>
);

export default Routes;
