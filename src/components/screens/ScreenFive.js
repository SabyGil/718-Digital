import React from 'react';

class ScreenFive extends React.Component {

  render(){
    return (
      <div className='view-container' style={{'backgroundColor':'maroon'}}>
        <div className="section-box screen-five-content">
          <div className='contact-heading'>
            <h1>Contact</h1>
          </div>
          <div className='five-left'>
            <label>Username:</label>
            <input type='text' />
            <label>Email:</label>
            <input type='email' />
            <label>Subject:</label>
            <textarea>Lorem ipsum dipsum</textarea>
            <button>Send</button>
          </div>
          <div className='five-right'>
              <div className='circle'></div>
              <div className='circle'></div>
              <div className='circle'></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScreenFive;
