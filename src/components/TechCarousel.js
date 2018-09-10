import React from 'react';
import Slider from "react-slick";

// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button,  ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Modal from 'react-modal';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { Consumer } from '../context';

export default class TechCarousel extends React.Component {

	render() {
		const {
			slides
		} = this.props
		const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1
	};
		return (
			<Consumer>
				{value => {
					const { dispatch, modalIsOpen } = value;
					return (
						<React.Fragment>
								<Slider {...settings}>
									 {slides.map((content, id) => {
										return (
											<div className="item " key={content.id}>
												<p>{content.name}</p>
												<Button color="danger" onClick={()=>dispatch({ type:"OPEN_MODAL" })}>BUTTON</Button>
													<Modal
														className='tech-modal'
														isOpen={modalIsOpen}
														onRequestClose={()=>dispatch({type:"CLOSE_MODAL"})}
														overlayClassName='overlay'
														>
															<div className="modal-outline">
																<div className='modal-title'>PROJECT</div>

																<div>
																	<div className="project">Project</div>

																</div>

																<div className='project-description'>
																	<button onClick={()=>dispatch({type:"CLOSE_MODAL"})} className='modal-close-btn'>modal btn</button>
																	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut magnam expedita, quisquam similique. Hic doloremque suscipit cupiditate assumenda illum! Aliquid.
																	{'some modal content'}
																</div>

																<div className='client' >
																		<div className="">
																			Client
																		</div>
																		<div className="b">
																			img
																		</div>
																</div>

																<div className='tech'>
																	<div className="">
																		TECH
																	</div>
																	<div className="">
																		two
																		<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png' height='100px'/>
																		{/* loop tech used */}
																	</div>
																</div>

															{/* <p>{content.client_or_team}</p> */}
														</div>
													</Modal>
											</div>
										)}
									)}
							</Slider>
						</React.Fragment>
					)
				}}
			</Consumer>
		)
	}
}

Modal.setAppElement('#root')
