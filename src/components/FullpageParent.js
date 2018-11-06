import React from 'react';
import Menu from './Menu';
import FullpageWrapper from './Fullpage';
import $ from 'jquery';
import GIF from '../imgs/test.gif';
import ALIEN_LOGO from '../imgs/718_alien.png';
import {
	Consumer
} from '../context';
import 'fullpage.js/vendors/scrolloverflow';

const fullpageOptions = {
	callbacks: ['onLeave'],
	// fixedElements: '#fixed',
	// lazyLoading: false
	//shows scroll bar for whole page
	scrollOverflow: true,
	anchors: ['Main', 'About', 'Services', 'Members', 'Contact'],
	navigation: true,
	controlArrows: true,
	normalScrollElements: ".normal-scroll",
	// scrollBar: true,
	// setAutoScrolling: false,
	// autoScrolling: false,
	licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
};

export default class FulpageParent extends React.Component {

	componentDidMount() {

	}

	// onLeave = () => {
	// 	console.log('hello')
	// }
	onLeave = () => {
		console.log('hello')
		// const logoContainer = document.querySelector('#logo-container');
		// console.log(logoContainer.classList)
		// if(this.props.location.hash !== '#Main') {
		// 	logoContainer.classList.add('flicker-out-2')
		// }
		// if(this.props.location.hash === '#Main') {
		// 	logoContainer.classList.remove('flicker-out-2')
		// }
	}

	render() {
		const {
			hash
		} = this.props.location
		// console.log(hash)
		console.log(this.onLeave())
		return (
			<Consumer>
				{value => {
					const { content, loader } = value;
					console.log(content, loader)
					return (
						<React.Fragment>
							{/* <div id="logo-container" className={hash === 'Main'? { display: 'block'} : 'flicker-out-2'}> */}

							<div id="logo-container" className={hash !== '#Main' ? 'flicker-out-1' : '' }>
								<img src={ GIF } id="logo" alt="" />
							</div>

							<div id='logo-sm' className={hash === '#Main' ? 'hide-menu' : 'fade-in-fwd' }>
								{/* <img src={ GIF } id="logo" alt="" /> */}
								{/* <div className='logo-styles'>LOGO</div> */}
								<img className='logo-styles' src={ ALIEN_LOGO } alt=""/>


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
								<FullpageWrapper {...fullpageOptions} content={content} />
							</React.Fragment>
						</React.Fragment>
					)}
				}
			</Consumer>
		)
	}
}
