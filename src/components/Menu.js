import React from 'react';

class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
		}
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu() {
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
		return(
			<React.Fragment>
        <nav className="menu-container">
          <a className="active" className="logo" href='#Main'></a>
          <ul>
            {isOpen ?
              <div className='menu-list'>
                <i className="fas fa-times" onClick={ this.toggleMenu}></i>

              {navLinks.map((link, i) => {
                  return (
                    <li key={i}>
                      <a href={`#${link}`} className={hash === `#${link}` ? 'active' : '' }>{link}</a>
                    </li>
                  )
                })
              }
            	</div>
              :
              <i className="fas fa-terminal" onClick={this.toggleMenu}></i>
            }
          </ul>
        </nav>
      </React.Fragment>
		);
	}
}

export default Menu;
