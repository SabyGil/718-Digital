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
import Media from "react-media";

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
	// console.log(props.selectedLink, 'selected')
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
					// style={`/${link}` === props.selectedLink ? {color: '#6b579d'} : null}
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
		// isActive: null,
		fadeIn: true,
		bgFade: false,
		selectedLink: 'collective'
		// selectedLink: location.pathname
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
		// const {
		// 	isActive
		// } = this.state;
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
						onEnter={()=> this.setState({
							// isActive: true,
							//--
							// bgFade: true,
							// fadeIn: false,
						})}
							timeout={700}
							// timeout={450}
							classNames='fade'
							// unmountOnExit
							onExited={() => this.setState({
								// isActive: false,
								//--
								// fadeIn: true,
								// bgFade: false
							})}>
            {/* <Route path='/:routeId' component={Path}/> */}
            <Route path='/:routeId' render={props => <Path {...props}
							selectedLink={this.state.selectedLink}
							onSelect={this.updateLink}
						/>}/>
          </CSSTransition>
        </TransitionGroup>

        {/* Links around section box */}
				 <Media query="(min-width: 900px)">
					 {matches =>
							matches ?
						 <NestedLink
							 selectedLink={this.state.selectedLink}
							 onSelect={this.updateLink}
						 /> : null
					 }
				 </Media>
				</Fade>
			</React.Fragment>
		);
	}
}

export const ScreenThree = withRouter(ThirdScreen)

const Path = ({
	match,
	selectedLink,
	onSelect,
}) => {
	const route = routeInfo.find(({
		heading
	}) => heading === match.params.routeId);
	return (
		<div className='section-box screen-three normal-scroll'>
			<Media query="(max-width: 899px)">
				{matches =>
					 matches ?
					<NestedLink
						selectedLink={selectedLink}
						onSelect={onSelect}
					/>: null
				}
			</Media>
      <div className='screen-three__img'>
				<img src='https://images.pexels.com/photos/935870/pexels-photo-935870.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' alt='screen three image' />
        <h1 className='overImage'>{route.contentTwo}</h1>
      </div>
      <div className='screen-three__aside'>
        <h1>{route.contentOne}</h1>
        lorem ipsum dipsum
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quas beatae iste veritatis a repudiandae modi magnam. Veritatis, earum, magnam.
        lorem ipsum dipsum
      </div>
      <div className='screen-three__content'>
        <h1>{route.heading}</h1>
				<div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quas beatae iste veritatis a repudiandae modi magnam. Veritatis, earum, magnam.
        lorem ipsum dipsum
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quas beatae iste veritatis a repudiandae modi magnam. Veritatis, earum, magnam.</p>
			</div>
      </div>

      <div className='screen-three__projects-container'>
         {/* <TechCarousel match={match} slides={route.slides || []} /> */}
         <TechCarousel />
      </div>
    </div>
	)
}
