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
		]
	},
];

const NestedLink = (props) => {
	const links = ['clients', 'collective', 'consulting'];
	return (
		<div className="nav nav-pills mb-3">
    {links.map(link => {
      return (
        <NavLink
					key={link}
					activeClassName="active"
					to={`${link}#Services`}
					className={`${link} nav-link`}
					style={link === props.selectedLink ? {color: '#6b579d'} : null}
					onClick={props.onSelect.bind(null, link)}
					>
          {link}
        </NavLink>
      )
    })}
  </div>
	)
}

class ThirdScreen extends React.Component {
	state = {
		selectedLink: 'collective'
	}

	updateLink = (link) => {
		this.setState({
			selectedLink: link,
		})
	}

	render() {
		const {
			location,
		} = this.props;
		const route = routeInfo.find(({
			heading
		}) => heading === 'collective');
		return (
			<React.Fragment>
				<Fade in={this.state.bgFade} tag="div"  className="bg-static" />
				<Fade in={this.state.fadeIn} tag="div"  className="view-container bg-image ">
				<div id={location.hash == "#Services" ? 'border-animation' : ''}/>
        {/* if route === /, collective is default */}
        <Route exact path='/' render={() => (
          <Redirect to='/collective#Main'/>
        )}/>
        {/* otherwise render nested paths */}

        <TransitionGroup component={null}>
          <CSSTransition
            key={location.key}
						timeout={700}
						classNames='fade'
					>
            {/* <Route path='/:routeId' component={Path}/> */}
            <Route path='/:routeId' render={props => <Path {...props}
							selectedLink={this.state.selectedLink}
							onSelect={this.updateLink}
							// set up to pass location prop to Path component
						/>}/>
          </CSSTransition>
        </TransitionGroup>

				<NestedLink
					selectedLink={this.state.selectedLink}
					onSelect={this.updateLink}
				/>

				</Fade>
			</React.Fragment>
		);
	}
}

export const ScreenThree = withRouter(ThirdScreen)

const Path = ({
	match,
	location,
	selectedLink,
	onSelect,
}) => {
	const route = routeInfo.find(({
		heading
	}) => heading === match.params.routeId);
	return (
		<div className='section-box screen-three --align_content normal-scroll'>

      <div className='screen-three__img glitch'>
				<img src='https://images.pexels.com/photos/935870/pexels-photo-935870.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' alt='screen three image' />
        <h1 className='overImage'>{route.contentTwo}</h1>
      </div>
      <div className='screen-three__aside'>
        <h1 className='glitch'>{route.contentOne}</h1>
        <p className='glitch'>lorem ipsum dipsum
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quas beatae iste veritatis a repudiandae modi magnam. Veritatis, earum, magnam.
        lorem ipsum dipsum</p>
      </div>
      <div className='screen-three__content'>
        <h1 className='glitch'>{route.heading}</h1>
				<div>
	        <p className='glitch'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quas beatae iste veritatis a repudiandae modi magnam. Veritatis, earum, magnam.
	        lorem ipsum dipsum
	        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quas beatae iste veritatis a repudiandae modi magnam. Veritatis, earum, magnam.</p>
				</div>
      </div>

      <div className='screen-three__projects-container'>
         <TechCarousel />
      </div>
    </div>
	)
}
