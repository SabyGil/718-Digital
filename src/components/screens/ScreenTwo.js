import React from 'react';

class ScreenTwo extends React.Component {

  render() {
    return (
      <div id='main' className='view-container scroll-bar-wrap' style={{'backgroundColor':'blue'}}>
        <div className="section-box screen-two-content">

          <div className='div-one'>
            <h3>lorem ipsum lorem ipsum dipsum lorem ipsum lorem ipsum dipsum
              lorem ipsum lorem ipsum dipsum  dipsum lorem ipsum lorem ipsum dipsum
            </h3>
          </div>
          <div className='tester' style={{'marginTop': '0rem'}}>
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

          <div className='div-two'>
            <img src='https://images.pexels.com/photos/261681/pexels-photo-261681.jpeg?auto=compress&cs=tinysrgb&h=350' alt='' height='200px'/>
          </div>

          <div className='div-three'>
            <p>
              lorelorem ipsum lorem ipsum dipsum lorem ipsum lorem ipsum dipsum
              lorem ipsum lorelorem ipsum lorem ipsum dipsum lorem ipsum lorem ipsum dipsum
              lorem ipsum
            </p>
          </div>
          <div className="cover-bar"></div>

        </div>
      </div>
    );
  }
}

export default ScreenTwo;
