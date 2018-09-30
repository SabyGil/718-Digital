import React from 'react';
import {
	Consumer
} from '../../context';

const users = [{
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
		"img": 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
	}
]

class ScreenFour extends React.Component {
	render() {
		return (
			<Consumer>
        {value => {
          const { members } = value.content
          return (
            <div className='view-container bg-four'>
              <div className="section-box screen-four">
                <div className='screen-four__title'>
                  <h1>Members</h1>
                </div>
                <div className='screen-four__content'>
                  <ul className='members'>
                    {members && members.map( member => {
                      const {id, about, name, stack } = member
                      return (
                        // <ul key={id} className='member'>
                        <li className="item" key={id}>
                          <ul>
                          <li>
                            <img
                              src={'https://s3.amazonaws.com/uifaces/faces/twitter/mghoz/128.jpg'}
                              alt=""
                              className='avatar'
                            />

                          </li>
                          <li>{name}</li>
                          <li>{about}</li>
                        </ul>
                      </li>
                      )
                    })
                    }
                  </ul>
                </div>
              </div>
            </div>
          )
        }}
      </Consumer>
		)
	}
}

export default ScreenFour;
