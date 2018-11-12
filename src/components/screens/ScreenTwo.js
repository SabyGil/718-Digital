import React from 'react';

class ScreenTwo extends React.Component {

	render() {
		const {
			hash
		} = this.props
		return (
			<div className='view-container bg-two' >
				<div id={hash == "#About" ? 'border-animation' : ''}/>
        <div id='ani-test' className="section-box --align_content screen-two scroll-bar-wrap normal-scroll">
          <h3 className='screen-two__title'>lorem ipsum lorem ipsum dipsum lorem ipsum lorem ipsum dipsum</h3>

          <div className='screen-two__content'>
            <p className='glitchTest'>TEST lorem ipsum dipsum elorem ipsum lor elorem ipsum lor</p>
            <p>lorem ipsum dipsum elorem ipsum lor elorem ipsum lor</p>
            <p>lorem ipsum dipsum elorem ipsum lor elorem ipsum lor</p>
            <p>lorem ipsum dipsum elorem ipsum lor elorem ipsum lor</p>

            <h3>More content</h3>
            <h3>More content</h3>
            <h3>More content</h3>


            <h3>More content</h3>
            <h3>More content</h3>
            <h3>More content</h3>
          </div>

          <div className='screen-two__img'>
            <img src='https://images.pexels.com/photos/261681/pexels-photo-261681.jpeg?auto=compress&cs=tinysrgb&h=350' alt='' height='200px'/>
          </div>

          <div className='screen-two__aside'>
            <p>
              ASIDE
              lorelorem ipsum lorem ipsum dipsum lorem ipsum lorem ipsum dipsum
              lorem ipsum lorelorem ipsum lorem ipsum dipsum lorem ipsum lorem ipsum dipsum
              lorem ipsum
            </p>
          </div>

        </div>
      </div>
		);
	}
}

export default ScreenTwo;
