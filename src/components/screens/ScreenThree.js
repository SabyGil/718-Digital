import React from 'react';
import TechCarousel from '../TechCarousel';
import {
	Route,
	Link,
	NavLink,
	Redirect,
	withRouter,
	Switch
} from 'react-router-dom';
import {
	TransitionGroup,
	CSSTransition
} from 'react-transition-group';
import {
	Consumer
} from '../../context';
import {
	Fade
} from "reactstrap";

const routeInfo = [{
		id: '1',
		heading: 'collective',
		contentOne: 'The collective',
		contentTwo: 'more content more content more content',
		slides: [
			'slideOne',
			'slideTwo', {
				testObj: 'default'
			},
			'slideThree',
			'slideFour',
			'slideThree',
			'slideFour'
		]
	},
	{
		id: '2',
		heading: 'consulting',
		contentOne: 'ipsum dipsum mixzum',
		contentTwo: 'fipsum wixzum nixsum',
		slides: [
			'slideOne',
			'slideTwo', {
				testObj: 'default'
			},
			'slideThree',
			// 'slideFour',
			// 'slideThree',
			// 'slideFour'
		]
	},
	{
		id: '3',
		heading: 'clients',
		contentOne: 'ipsum dipsum mixzum',
		contentTwo: 'fipsum wixzum nixsum',
		slides: [
			'slideOne',
			'slideTwo', {
				testObj: 'default'
			},
			'slideThree',
			// 'slideFour',
			// 'slideThree',
			// 'slideFour'
		]
	},
];

const NestedLink = (props) => {
	const links = ['clients', 'collective', 'consulting'];
	return (
		<div className="nav nav-pills mb-3">
    {links.map(link => {
      return (
        <NavLink key={link} activeClassName="active" to={`${link}#Services`} className={`${link} nav-link`}>
          {link}
        </NavLink>
      )
    })}
  </div>
	)
}

class ThirdScreen extends React.Component {
	state = {
		// isActive: null,
		fadeIn: true,
		bgFade: false
	}

	// componentDidMount() {
	// 	this.setState({
	// 		isActive: false,
	// 	})
	// }

	toggle = () => {
		this.setState({
			fadeIn: !this.state.fadeIn,
			// bgFade: !this.state.fadeIn,
			bgFade: !this.state.bgFade,
		});
	};

	render() {
		const {
			location
		} = this.props;
		const route = routeInfo.find(({
			heading
		}) => heading === 'collective');
		// const {
		// 	isActive
		// } = this.state;
		// const bgHook = document.querySelector('#bg-hook')
		// if(isActive === false) {
		// 	bgHook.classList.add('bg-animation')
		// }
		// if(isActive === false) {
		// 	bgHook.classList.remove('bg-animation')
		// }
		// console.log(location.pathname)
		return (
			<React.Fragment>
				<Fade in={this.state.bgFade} tag="div"  className="bg-static" />
				<Fade in={this.state.fadeIn} tag="div"  className="view-container bg-image ">

        {/* if route === /, collective is default */}
        <Route exact path='/' render={() => (
          <Redirect to='/collective'/>
        )}/>
        {/* otherwise render nested paths */}

        <TransitionGroup component={null}>
          <CSSTransition
            key={location.key}
						onEnter={()=> this.setState({
							// isActive: true,
							bgFade: true,
							fadeIn: false,
						})}
							timeout={700}
							// timeout={450}
							classNames='fade'
							// unmountOnExit
							onExited={() => this.setState({
								// isActive: false,
								fadeIn: true,
								bgFade: false
							})}>
            <Route path='/:routeId' component={Path}/>
          </CSSTransition>
        </TransitionGroup>

        {/* Links around section box */}
        <NestedLink/>
				</Fade>
			</React.Fragment>
		);
	}
}

export const ScreenThree = withRouter(ThirdScreen)

const Path = ({
	match
}) => {
	const route = routeInfo.find(({
		heading
	}) => heading === match.params.routeId);
	return (
		<div className='section-box screen-three normal-scroll'>
      <div className='screen-three__img'>
        lorem ipsum dipsum
        eritatis, earum, magnam.
        lorem ipsum dipsum
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quas beatae iste veritatis a repudiandae modi magnam. Veritatis, earum, magnam.
        lorem ipsum dipsum
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quas beatae iste veritatis a repudiandae modi magnam. Veritatis, earum, magnam.
        <h1>{route.contentTwo}</h1>
      </div>
      <div className='screen-three__aside'>
        <h1>{route.contentOne}</h1>
        lorem ipsum dipsum
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quas beatae iste veritatis a repudiandae modi magnam. Veritatis, earum, magnam.
        lorem ipsum dipsum
      </div>
      <div className='screen-three__content'>
        <h1>{route.heading}</h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quas beatae iste veritatis a repudiandae modi magnam. Veritatis, earum, magnam.
        lorem ipsum dipsum
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quas beatae iste veritatis a repudiandae modi magnam. Veritatis, earum, magnam.
      </div>

      <div className='screen-three__projects-container'>
         {/* <TechCarousel match={match} slides={route.slides || []} /> */}
         <TechCarousel />
      </div>
    </div>
	)
}
