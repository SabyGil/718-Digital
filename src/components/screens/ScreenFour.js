import React from 'react';

const users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    img: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg'
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    img: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'
  },
  {
    "id": 3,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    img: 'https://s3.amazonaws.com/uifaces/faces/twitter/abinav_t/128.jpg'
  },
  {
    "id": 4,
    "name": "Mac Joe",
    "username": "Mac.Joe",
    img: 'https://s3.amazonaws.com/uifaces/faces/twitter/mghoz/128.jpg'
  },
  {
    "id": 5,
    "name": "Tony Hawk",
    "username": "Tony.Hawk",
    img: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
  }
]

class ScreenFour extends React.Component {

  render(){
    return (
      <div className='view-container' style={{'backgroundColor':'orange'}}>
        <div className="section-box screen-four">
          <div className='screen-four__content'>
            <h1>Members</h1>
          </div>
          {users.map((user, i) => {
            const {name, username, img} = user
            return (
              <div key={i} className="card">
                <div className="card-header">{name}</div>

                <div className="card-body" style={{backgroundImage: `${img}`, backgroundSize: 'cover'}}>
                  {username}
                  <i className="fas fa-user-circle d-block text-center"/>
                </div>
              </div>
            )
          })

          }
          {/* <div className='screen-four__user-profiles-container'>
            <i className="fas fa-user-circle"></i>
            <i className="fas fa-user-circle"></i>
            <i className="fas fa-user-circle"></i>
            <i className="fas fa-user-circle"></i>
            <i className="fas fa-user-circle"></i>
            <i className="fas fa-user-circle"></i>
          </div> */}
        </div>
      </div>
    );
  }
}

export default ScreenFour;
