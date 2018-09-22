import React from 'react';

class ScreenTwo extends React.Component {

  render() {
    return (
      <div id='main' className='view-container' style={{'backgroundColor':'blue'}}>
        <div className="section-box screen-two scroll-bar-wrap normal-scroll">
          {/* <div class="force-overflow"></div> */}
          <h3 className='screen-two__title'>lorem ipsum lorem ipsum dipsum lorem ipsum lorem ipsum dipsum
            {/* lorem ipsum lorem ipsum dipsum  dipsum lorem ipsum lorem ipsum dipsum */}
          </h3>

          <div className='screen-two__content'>
            <p>lorem ipsum dipsum elorem ipsum lor elorem ipsum lor</p>
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
          {/* <div className="cover-bar" data-simplebar></div> */}

        </div>
      </div>
    );
  }
}

export default ScreenTwo;
