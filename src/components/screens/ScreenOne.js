import React from 'react';
// import $ from 'jquery';
// import GIF from '../../imgs/test.gif';

class ScreenOne extends React.Component {
		render() {
				return (
						<div className='view-container'>
	        <div id="logo-container">
	          {/* <img src={ GIF } id="logo" alt="" /> */}
	        </div>
        <div className="header-unit" style={{'height':'100vh'}} id="landing">
        {/* <div className="header-unit" style={{'height':'100vh'}}> */}
          <div id="video-container">
            <video loop autoPlay className="fillWidth">
                {/* <source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" type="video/mp4"/> */}
                {/* <source src="https://videos.pond5.com/spray-graffiti-art-making-spray-footage-047584428_main_xl.mp4" type="video/mp4"/> */}
								<source src={'https://pixabay.com/en/videos/download/video-6395_medium.mp4'} type="video/mp4" />
            </video>
            {/* <video autoPlay loop mute='true' className="fillWidth">
                <source src="https://pixabay.com/en/videos/download/video-7269_medium.mp4" type="video/mp4"/>
            </video> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ScreenOne;
