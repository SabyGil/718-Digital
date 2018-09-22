import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import ScreenOne from './screens/ScreenOne';
import ScreenTwo from './screens/ScreenTwo';
import {
	ScreenThree
} from './screens/ScreenThree';
import ScreenFour from './screens/ScreenFour';
import ScreenFive from './screens/ScreenFive';

/*
<button onClick={() => fullpageApi.moveTo(3, 4)}>Click me to move down</button>
<button onClick={() => fullpageApi.moveSectionDown()}>Click me to move down</button>
*/

const FullpageWrapper = fullpageProps => (
		<ReactFullpage
    {...fullpageProps}
    render={({state, fullpageApi}) => {
      return (
        <React.Fragment>
          <div className="section">
            <ScreenOne/>
            <a onClick={() => fullpageApi.moveSectionDown()} className='section-scroll-arrow'>
              <i className="fas fa-chevron-down"></i>
            </a>
          </div>
          {/* <div className="view-container"></div> */}
          <div className="section">
            <ScreenTwo />
            <a onClick={() => fullpageApi.moveSectionDown()} className='section-scroll-arrow'>
              <i className="fas fa-chevron-down"></i>
            </a>
          </div>
          <div className="section">
            <ScreenThree routerProps={fullpageProps}	/>
            <a onClick={() => fullpageApi.moveSectionDown()} className='section-scroll-arrow'>
              <i className="fas fa-chevron-down"></i>
            </a>
          </div>
          <div className="section">
            <ScreenFour/>
            <a onClick={() => fullpageApi.moveSectionDown()} className='section-scroll-arrow'>
              <i className="fas fa-chevron-down"></i>
            </a>
          </div>
          <div className="section">
            <ScreenFive/>
          </div>
        </React.Fragment>
      );
    }}
  />
);

export default FullpageWrapper;
