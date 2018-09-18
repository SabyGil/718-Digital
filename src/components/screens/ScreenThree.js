import React from 'react';
import TechCarousel from '../TechCarousel';
import {Route, Link, NavLink, Redirect, withRouter, Switch} from 'react-router-dom';
// import 'simplebar/dist/simplebar.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Consumer } from '../../context';

const routeInfo = [
  {
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

class ThirdScreen extends React.Component {
  render() {
    const { location } = this.props;
    const route = routeInfo.find(({heading}) => heading === 'collective');
    // TODO: render a component called background
    return (
      <div className='view-container bg'>
        {/* if route === /, collective is default */}
        <Route exact path='/' render={() => (
          <Redirect to='/collective'/>
        )}/>
          {/* otherwise render nested paths */}

    {/* <div className="cover"> */}
        <TransitionGroup component={null}>
          <CSSTransition
              key={location.key}
              timeout={1000}
              classNames='fade'
            >
                <Route path='/:routeId' component={Path}/>
                {/* <Route exact={true} path='/:r/:g/:b' component={Test}/> */}
          </CSSTransition>
        </TransitionGroup>
      {/* </div> */}

        {/* Links around section box */}
        <div className="nav nav-pills mb-3">
          <NavLink activeClassName='' to='clients#Services' className="clients nav-link">
            Clients
          </NavLink>
          <Link to='collective#Services'>
            <h2 className="collective nav-link">
              Collective
            </h2>
          </Link>
          <Link to='consulting#Services'>
            <h2 className="consultation nav-link">
              Consulting
            </h2>
          </Link>
        </div>
      </div>
    );
  }
}

export const ScreenThree = withRouter(ThirdScreen)

const Path = ({ match }) => {
  const route = routeInfo.find(({heading}) => heading === match.params.routeId);
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

      {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quas beatae iste veritatis a repudiandae modi magnam. Veritatis, earum, magnam.
      lorem ipsum dipsum
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quas beatae iste veritatis a repudiandae modi magnam. Veritatis, earum, magnam.
      lorem ipsum dipsum
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quas beatae iste veritatis a repudiandae modi magnam. Veritatis, earum, magnam. */}
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
        {/* <TechCarousel match={match} slides={route.slides}/> */}
         {/* <TechCarousel match={match} slides={route.slides || []} /> */}
         <TechCarousel />
         {/* <TechCarousel match={match} /> */}

      </div>
    </div>
  )
}
// RGB
const Test = ({ match }) => {
  const { params } = match;
  return (
    <div style={{
      ...styles.rgb,
      // background: `rgb(${params.r}, ${params.g}, ${params.b})`
      background: `#e0115f`
    }}>
      {/* rgb({params.r}, {params.g}, {params.b}) */}
    </div>
  )
}


const styles = {};

styles.fill = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}

styles.rgb = {
  ...styles.fill,
}
