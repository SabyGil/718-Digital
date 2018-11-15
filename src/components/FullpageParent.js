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
	scrollOverflow: true,
	anchors: ['Main', 'About', 'Services', 'Members', 'Contact'],
	navigation: true,
	controlArrows: true,
	normalScrollElements: ".normal-scroll",
	licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
	// fixedElements: '#fixed',
	// lazyLoading: false
	//shows scroll bar for whole page
	// scrollBar: true,
	// setAutoScrolling: false,
	// autoScrolling: false,
};

export default class FulpageParent extends React.Component {

	componentDidMount() {}
	onLeave = () => {}

	render() {
		const {
			hash
		} = this.props.location
		return (
			<Consumer>
				{value => {
					const { content, loader } = value;
					return (
						<React.Fragment>
							<div id="logo-container" className={hash !== '#Main' ? 'flicker-out-1' : '' }>
								<img src={ GIF } id="logo" alt="" />
							</div>

							<div id='logo-sm' className={hash === '#Main' ? 'hide-menu' : 'fade-in-fwd' }>
								<img className='logo-styles logo-glitch' src={ ALIEN_LOGO } alt=""/>
							</div>
							{loader ?
								<h1>LOADING...</h1>
								:
								<React.Fragment>
									<Menu
										navLinks={fullpageOptions.anchors}
										hash={hash}
									/>
									<FullpageWrapper
										{...fullpageOptions}
										content={content}
									 />
								</React.Fragment>
							}
							{hash === '#Main' ? '' :
								<a href='#Main' className='scroll-to-top-arrow'>
									<i className="fas fa-chevron-up"></i>
								</a>
							}
						</React.Fragment>
					)}
				}
			</Consumer>
		)
	}
}
