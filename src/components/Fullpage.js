import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import ScreenOne from './screens/ScreenOne';
import ScreenTwo from './screens/ScreenTwo';
import {
	ScreenThree
} from './screens/ScreenThree';
import ScreenFour from './screens/ScreenFour';
import ScreenFive from './screens/ScreenFive';
import {
	withRouter
} from 'react-router-dom';

const FullpageWrapper = withRouter(fullpageProps => (
			<ReactFullpage
	    {...fullpageProps}
	    render={({state, fullpageApi}) => {
				const { hash } = fullpageProps.location
	      return (
	        <React.Fragment>
	          <div className="section">
	            <ScreenOne/>
	            <a onClick={() => fullpageApi.moveSectionDown()} className='section-scroll-arrow'>
	              <i className="fas fa-chevron-down"></i>
	            </a>
	          </div>
	          <div className="section">
	            <ScreenTwo hash={hash} />
	            <a onClick={() => fullpageApi.moveSectionDown()} className='section-scroll-arrow'>
	              <i className="fas fa-chevron-down"></i>
	            </a>
	          </div>
	          <div className="section">
	            <ScreenThree routerProps={fullpageProps} hash={hash}	/>
	            <a onClick={() => fullpageApi.moveSectionDown()} className='section-scroll-arrow'>
	              <i className="fas fa-chevron-down"></i>
	            </a>
	          </div>
	          <div className="section">
	            <ScreenFour hash={hash}/>
	            <a onClick={() => fullpageApi.moveSectionDown()} className='section-scroll-arrow'>
	              <i className="fas fa-chevron-down"></i>
	            </a>
	          </div>
	          <div className="section">
	            <ScreenFive hash={hash}/>
	          </div>
	        </React.Fragment>
	      );
	    }}
	  />
	)
)

export default FullpageWrapper;
