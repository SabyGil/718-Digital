import React from 'react';
import VID from '../../imgs/vid.mp4';

const ScreenOne = () => {
		return (
			<div className='view-container'>
      <div id="video-container">
        <video loop autoPlay muted className="fillWidth">
					{/* <source src="https://videos.pond5.com/spray-graffiti-art-making-spray-footage-047584428_main_xl.mp4" type="video/mp4"/> */}
					<source src={ VID } type="video/mp4" />
				</video>
      </div>
    </div>
  );
}

export default ScreenOne;
