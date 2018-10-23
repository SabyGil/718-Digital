import React from 'react';
import Clock from './Clock';
import classnames from 'classnames';

class Menu extends React.Component {
	state = {
		isOpen: false
	}

	toggleMenu = () => {
		this.setState(e => ({
			isOpen: !e.isOpen
		}));
	}

	render() {
		const {
			isOpen,
		} = this.state;
		const {
			hash
		} = this.props;
		const navLinks = ['About', 'Services', 'Members', 'Contact'];
		return (
			<React.Fragment>
        <nav className="menu-container">
          <a className="active" className="logo" href='#Main'></a>
          <ul className={isOpen ? '' : 'center-menu'}>
            {isOpen ?
              // <div className='menu-list scale-in-tr'>
              // <div className='menu-list scale-in-tr scale-out-tr'>
              <div className={classnames('menu-list', {
								// isOpen ? 'scale-in-tr' : 'scale-out-tr'
								// 'scale-in-tr': isOpen === true : 'scale-out-tr'
								'scale-in-tr': isOpen === true,
								'scale-out-tr': isOpen === false
							})
							}>
                <i className="fas fa-times" onClick={ this.toggleMenu}/>
								<Clock />
              {navLinks.map((link, i) => {
                  return (
                    <li key={i} className='fade-in-fwd'>
                      <a href={`#${link}`} className={hash === `#${link}` ? 'active' : '' }>{link}</a>
                    </li>
                  )
                })
              }
            	</div>
              :
              <i className="fas fa-terminal" onClick={this.toggleMenu}/>
            }
          </ul>
        </nav>
      </React.Fragment>
		);
	}
}

export default Menu;
