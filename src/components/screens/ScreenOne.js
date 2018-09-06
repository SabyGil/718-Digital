import React from 'react';
// import $ from 'jquery';
// import GIF from '../../imgs/test.gif';

class ScreenOne extends React.Component {
		constructor(props) {
			super(props);
			this.state = {}
		}
		// componentDidMount() {
		//   // const scrollBtn = document.querySelector('.scroll-to-top');
		//
		//   var current = $("#landing").height()*2 - $(document).scrollTop()*2;
		//
		//   $("#logo").css("max-width", current / $("#landing").height() * 50 + "%");
		//   $("#logo-container").css("transform", "translate(-" + current / $("#landing").height() * 50 / 2 + "%, -50%)");
		//   $("#logo-container").css("top", current / $("#landing").height() * 50 / 2 + "%");
		//
		//   $( document ).scroll(function() {
		//       current = $("#landing").height()*2 - $(document).scrollTop()*2;
		//
		//       $("#landing").css("opacity", ($("#landing").height()*2 - $(document).scrollTop()*2)/ $("#landing").height() * 0.5);
		//       $("#main").css("opacity", ($("#landing").height() - $(document).scrollTop()*2)/ -$("#landing").height() );
		//
		//       if(current / $("#landing").height() * 50 < 20){
		//           $("#logo").css("max-width", "20%");
		//           $("#logo-container").css("transform", "translate(-10%, -50%)");
		//           $("#logo-container").css("top", "10%");
		//           // scrollBtn.style.display = 'block';
		//       }else{
		//           $("#logo").css("max-width", current / $("#landing").height() * 50 + "%");
		//           $("#logo-container").css("transform", "translate(-" + current / $("#landing").height() * 50 / 2 + "%, -50%)");
		//           $("#logo-container").css("top", current / $("#landing").height() * 50 / 2 + "%");
		//           // scrollBtn.style.display = 'none';
		//       }
		//   });
		// }

		render() {
			return(
				<div className='view-container'>
	        <div id="logo-container">
	          {/* <img src={ GIF } id="logo" alt="" /> */}
	        </div>
        <div className="header-unit" style={{'height':'100vh'}} id="landing">
        {/* <div className="header-unit" style={{'height':'100vh'}}> */}
          <div id="video-container">
            {/* <video autoPlay loop mute='true' className="fillWidth">
                <source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" type="video/mp4"/>
            </video> */}
            <video autoPlay loop mute='true' className="fillWidth">
                <source src="https://pixabay.com/en/videos/download/video-7269_medium.mp4" type="video/mp4"/>
            </video>
          </div>
        </div>
      </div>
    );
  }
}

export default ScreenOne;
