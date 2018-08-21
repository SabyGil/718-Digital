import React from 'react';
import Menu from './Menu';
import FullpageWrapper from './Fullpage';
import api from '../utils/api';
import $ from 'jquery';
import GIF from '../imgs/test.gif';

import 'fullpage.js/vendors/scrolloverflow';

const fullpageOptions = {
	// callbacks: ['onLeave'],
	// anchors: ['firstPage', 'secondPage'],
	// fixedElements: '#fixed',
	scrollOverflow: true,
	anchors: ['Main', 'About', 'Services', 'Members', 'Contact'],
	navigation: true,
	controlArrows: true,
};

export default class FulpageParent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loader: true,
			content: {}
		}
	}

	async componentDidMount() {
		
		$( "#logo" ).css({width: "100%"}, 1000);
		$( "#logo-container" ).css({transform: "translate(-50%, -50%)", top:"50%"}, 1000);

		$(window).on('hashchange', function(e){
			if(this.window.location.hash == "#Main"){
				$( "#logo" ).animate({width: "100%"}, 1000);
				$( "#logo-container" ).animate({animation: "fullLogo 2s", top:"50%"}, 1000);		
			}else{
				$( "#logo" ).animate({width: "20%"}, 1000);
				$( "#logo-container" ).animate({animation: "fullLogo 2s", top:"10%"}, 1000);
			}
		});
		//<----->

		const res = await api.getContent();
		this.setState({
			content: res.data,
			loader: false
		});
	}

	render() {
		const {
			hash
		} = this.props.location
		return(
			<React.Fragment>
        <div id="logo-container">
          <img src={ GIF } id="logo" alt="" />
						{/* LOGO */}
        </div>
        {/* <div id="landing"></div> */}
        {/* {this.state.loader ?
          <h1>LOADING...</h1>
          :
          <React.Fragment>
            <Menu />
            <FullpageWrapper {...fullpageOptions} {...this.props} content={this.state.content}/>
          </React.Fragment>
        } */}
				{hash === '#Main' ? '' :
					<a href='#Main' className='scroll-to-top-arrow'>
						<i className="fas fa-chevron-up"></i>
					</a>
				}
        <React.Fragment>
          <Menu navLinks={fullpageOptions.anchors} hash={hash}/>
          <FullpageWrapper {...fullpageOptions} content={this.state.content}/>
        </React.Fragment>
      </React.Fragment>
		);
	}
}
