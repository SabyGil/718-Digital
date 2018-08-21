import React from 'react';
import TechCarousel from '../TechCarousel';
import {Route, Link, NavLink, withRouter} from 'react-router-dom';

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
  }, {
    id: '2',
    heading: 'consulting',
    contentOne: 'ipsum dipsum mixzum',
    contentTwo: 'fipsum wixzum nixsum',
    slides: [
      'slideOne',
      'slideTwo', {
        testObj: 'test'
      }
    ]
  }, {
    id: '3',
    heading: 'clients',
    contentOne: 'ipsum dipsum mixzum',
    contentTwo: 'fipsum wixzum nixsum'
  }
];

class ThirdScreen extends React.Component {
  state = {

  }
  render() {
    const { content } = this.props.routerProps;
    const { match, location, history } = this.props;
    console.log(content.projects)
    // console.log(route.slides[2].testObj)
    // const {match} = this.props.routerProps;
    const route = routeInfo.find(({heading}) => heading === 'collective');
    // console.log(route.slides)
    return (
      <div className='view-container' style={{
        'backgroundColor' : 'green'
      }}>
      {/* if route === /, collective is default */}
      <Route exact path='/' render={() => (
        <div className='section-box screen-three-content'>
          <div className='three-left__1'>
            <h1>{route.contentOne}</h1>
            lorem ipsum dipsum
          </div>
          <div className='three-left__2'>
            lorem ipsum dipsum
            <h1>{route.contentTwo}</h1>
          </div>
          <div className='three-right'>
            <h1>{route.heading}</h1>
          </div>
          <div className='three-bottom'>
            <TechCarousel match={match} slides={content.projects || []} />
            {/* <TechCarousel match={match} slides={route.slides || []} /> */}
          </div>
        </div>
      )
    }/>
        {/* otherwise render nested paths */}

      <Route path='/:routeId' component={Path}/>
      {/* Links around section box */}
      <div className="nav nav-pills mb-3">
        <NavLink activeClassName='' to='clients' className="clients nav-link">
          Clients
        </NavLink>
        <Link to='collective'>
          <h2 className="collective nav-link">
            Collective
          </h2>
        </Link>
        <Link to='consulting'>
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

export const Path = ({match}) => {
  // console.log(match,  routeInfo)
  // console.log(route.slides)
  const route = routeInfo.find(({heading}) => heading === match.params.routeId);
  return (
    <div className='section-box screen-three-content'>
      <div className='three-left__1'>
        <h1>{route.contentOne}</h1>
        lorem ipsum dipsum
      </div>
      <div className='three-left__2'>
        lorem ipsum dipsum
        <h1>{route.contentTwo}</h1>
      </div>
      <div className='three-right'>
        <h1>{route.heading}</h1>
      </div>
      <div className='three-bottom'>
        <TechCarousel match={match} slides={route.slides}/>
      </div>
    </div>
  );
}
