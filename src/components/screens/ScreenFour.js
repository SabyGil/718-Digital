import React from 'react';
import {
	Consumer
} from '../../context';
import Modal from 'react-modal';
// import { TabContent, TabPane, Nav, NavItem, NavLink as Link, Form, FormGroup, Label, Input, Card, Row, Col, Dropdown, DropdownToggle, DropdownMenu, Alert } from 'reactstrap';
// import { TabContent, TabPane, Nav, NavItem, NavLink as Link, Form, FormGroup } from 'reactstrap';


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
	state = {
		activeModal: 0
	}

	handleClick = (e, index, dispatch) => {
		this.setState({
			activeModal: index
		})
		dispatch({
			type: "OPEN_MEMBERS_MODAL"
		})
	}

	hideModal = () => {
		this.setState({
			activeModal: null
		})
	}

	nextModal = (e, index, members) => {
		if(this.state.activeModal < members.length - 1) {

			this.setState({
				activeModal: index + 1
			})
		}
	}

	prevModal = (e, index, members) => {
		if(this.state.activeModal > 0) {
			this.setState({
				activeModal: index - 1
			})
		}
	}

	prevModalKeyPress = e => {
		console.log(e.keyCode, 'called');
		// console.log('called');
		//left = 37, right = 39
		/*
		  if keycode equals 37 && currentIndex !== 0
		*/
	}

	render() {
		const {
			activeModal
		} = this.state;
		const {
			hash
		} = this.props
		return (
			<Consumer>
        {value => {
          const { members } = value.content
					const { dispatch, MembersModalIsOpen } = value;
          return (
            <div className='view-container bg-four'>
							<div id={hash == "#Members" ? 'border-animation' : ''}/>
              <div className="section-box screen-four">
                <div className='screen-four__title'>
                  <h1>Members</h1>
                </div>
                <div className='screen-four__content'>
									<ul className='members'>
                    {members && members.map( (member, index) => {
                      const {id, about, name, stack } = member
                      return (
	                        <li className="item" key={id}>
	                          <ul>
	                          <li>
	                            <img
	                              src={'https://s3.amazonaws.com/uifaces/faces/twitter/mghoz/128.jpg'}
	                              alt={this.props.img}
	                              className='avatar'
																onClick={e => this.handleClick(e, index, dispatch)}
	                            />

	                          </li>
	                          <li>{name}</li>
	                          <li>{about}</li>
	                        </ul>
												{/*  */}
												{activeModal === index ?

												<Modal
													className='member-modal normal-scroll'
													style={{ zIndex: '20'}}
													isOpen={MembersModalIsOpen}
													// onRequestClose={()=>dispatch({type:"CLOSE_MODAL"})}
													onRequestClose={this.hideModal}
													overlayClassName='overlay'
													contentLabel="modal"
													closeTimeoutMS={500}
													// onKeyDown={this.prevModalKeyPress}
													// tabIndex="0"
													>
														{/* <div className="modal-outline">
															<div className='modal-title'>PROJECT</div>
															<span>{name}</span>
															<span>{about}</span>
														</div> */}
														{/* <span>{name}</span>
														<span>{about}</span> */}
														<button onClick={()=>dispatch({type:"CLOSE_MEMBERS_MODAL"})} className='modal-close-btn'>
																<i className="fas fa-times" />
														</button>

														{activeModal >= 1 ?
															<i
																className="fas fa-chevron-left"
																onClick={e => this.prevModal(e, index, members)}
																// onKeyDown={this.prevModalKeyPress}
																// onKeyDown={() => this.prevModalKeyPress()}
																// onKeyDown={console.log('arrow right')}
																// tabIndex="0"
															/>
															: null
														}
														{activeModal < members.length - 1 ?
															<i className="fas fa-chevron-right" onClick={e => this.nextModal(e, index, members)}/>
															: null
														}
														<MemberInfo
															name={name}
															// profileImg={img}
															about={about}
														/>

											 </Modal>
											 : null}
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

ScreenFour.defaultProps = {
	img: 'IMG UNAVAILABLE'
}

const MemberInfo = props => {
	return (
		<React.Fragment>
		{/* // <div className=""> */}

			{/* <img className='member-modal__img' src="" alt=""/> */}
			<img
				src={'https://s3.amazonaws.com/uifaces/faces/twitter/mghoz/128.jpg'}
				alt={props.img}
				className='member-modal__img'
			/>
			<div className="member-modal__content">
				<div className="member-modal__title">
					<h1>{props.name}</h1>
				</div>
				<p>{props.about}</p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt vel possimus quaerat, nisi, quasi distinctio velit praesentium laborum architecto adipisci voluptatum error quisquam. Fugit quis, non velit quam consequatur.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quod, deleniti a molestias commodi nemo id pariatur velit facere quos officia, necessitatibus dolorum voluptatem distinctio tempora sit qui corporis laboriosam.
			</div>

		{/* // </div> */}
		</React.Fragment>
	)
}

MemberInfo.defaultProps = {
	img: 'IMG UNAVAILABLE'
}

export default ScreenFour;
