import React from 'react';

class ScreenFour extends React.Component {

  render(){
    return (
      <div className='view-container' style={{'backgroundColor':'orange'}}>
        <div className="section-box screen-four">
          <div className='screen-four__content'>
            <h1>Members</h1>
          </div>
          <div className='screen-four__user-profiles-container'>
            <i className="fas fa-user-circle"></i>
            <i className="fas fa-user-circle"></i>
            <i className="fas fa-user-circle"></i>
            <i className="fas fa-user-circle"></i>
            <i className="fas fa-user-circle"></i>
            <i className="fas fa-user-circle"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default ScreenFour;
