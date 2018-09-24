import React from 'react';
import Menu from './Menu';
import FullpageWrapper from './Fullpage';
import $ from 'jquery';
import GIF from '../imgs/test.gif';
import {
	Consumer
} from '../context';

import 'fullpage.js/vendors/scrolloverflow';

const fullpageOptions = {
	// callbacks: ['onLeave'],
	// fixedElements: '#fixed',
	scrollOverflow: true,
	anchors: ['Main', 'About', 'Services', 'Members', 'Contact'],
	navigation: true,
	controlArrows: true,
	normalScrollElements: ".normal-scroll"
};

export default class FulpageParent extends React.Component {

	componentDidMount() {
		var pos_test = 0;
		$("#logo").css({
			width: "100%"
		}, 1000);
		$("#logo-container").css({
			transform: "translate(-50%, -50%)",
			top: "50%"
		}, 1000);

		$(window).on('hashchange', function(e) {
			if(this.window.location.hash == "#Main") {
				$("#logo").animate({
					a: "-50%"
				}, {
					duration: 500,
					step: function(now, fx) {
						// console.log(now)
						$("#logo-container").css({
							transform: "translate(" + now + "%, -50%)"
						}, 1000);
					}
				});
				$("#logo").animate({
					width: "100%"
				}, 1000);
				$("#logo-container").animate({
					animation: "fullLogo 2s",
					top: "50%"
				}, 1000);
			} else {
				$("#logo").animate({
					width: "20%"
				}, 1000);
				$("#logo").animate({
					a: "-100%"
				}, {
					duration: 500,
					step: function(now, fx) {
						// console.log(now)
						$("#logo-container").css({
							transform: "translate(" + now + "%, -50%)"
						}, 1000);
					}
				});
				$("#logo-container").animate({
					animation: "fullLogo 2s",
					top: "10%"
				}, 1000);
			}
		});
	}

	render() {
		const {
			hash
		} = this.props.location
		return (
			<Consumer>
				{value => {
					const { content, loader } = value;
					console.log(content, loader)
					return (
						<React.Fragment>
							<div id="logo-container">
								<img src={ GIF } id="logo" alt="" />
							</div>
							{/* <div id="landing"></div> */}
							{/* {this.state.loader ?
								<h1>LOADING...</h1>
								:
								<React.Fragment>
									<Menu />
									<FullpageWrapper {...fullpageOptions} {...this.props} content={content}/>
								</React.Fragment>
							} */}
							{hash === '#Main' ? '' :
								<a href='#Main' className='scroll-to-top-arrow'>
									<i className="fas fa-chevron-up"></i>
								</a>
							}
							<React.Fragment>
								<Menu navLinks={fullpageOptions.anchors} hash={hash}/>
								<FullpageWrapper {...fullpageOptions} content={content}/>
							</React.Fragment>
						</React.Fragment>
					)}
				}
			</Consumer>
		)
	}
}
