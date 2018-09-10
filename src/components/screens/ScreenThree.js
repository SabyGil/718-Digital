import React from 'react';
import TechCarousel from '../TechCarousel';
import {Route, Link, NavLink, withRouter} from 'react-router-dom';
// import 'simplebar/dist/simplebar.css';

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
  state = {

  }
  render() {
    const { content } = this.props.routerProps;
    const { match, location, history } = this.props;
    const route = routeInfo.find(({heading}) => heading === 'collective');
    return (
      <div className='view-container bg' style={{
          // 'backgroundColor' : 'green'
        }}>
        {/* if route === /, collective is default */}
        <Route exact path='/' render={() => (
          <div className='section-box screen-three'>
            <div className='screen-three__img'>
              <h1>{route.contentOne}</h1>
              lorem ipsum dipsum
            </div>
            <div className='screen-three__aside'>
              lorem ipsum dipsum
              <h1>{route.contentTwo}</h1>
            </div>
            <div className='screen-three__content'>
              <h1>{route.heading}</h1>
            </div>
            <div className='screen-three__projects-container'>
              {/* <TechCarousel match={match} slides={content.projects || []} /> */}
              <TechCarousel match={match} slides={route.slides || []} />
            </div>
          </div>
        )
      }/>
          {/* otherwise render nested paths */}

        <Route path='/:routeId' component={Path}/>
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

export const Path = ({ match }) => {
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
        <TechCarousel match={match} slides={route.slides}/>
      </div>
    </div>
  );
}
