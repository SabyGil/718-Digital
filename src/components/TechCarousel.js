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
																	<button onClick={()=>dispatch({type:"CLOSE_MODAL"})} className='modal-close-btn'>
																		  <i className="fas fa-times" />
																	</button>
																	<p className="lead display-3">
																		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut magnam expedita, quisquam similique. Hic doloremque suscipit cupiditate assumenda illum! Aliquid.
																	</p>
																	{'some modal content'}
																</div>

																<div className='client' >
																		<div className="">
																			Client
																		</div>
																		<div className="b">
																				<img src="https://images.unsplash.com/photo-1518709911915-712d5fd04677?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=79ddcb77f12424c3e6f1923670b3a8df&auto=format&fit=crop&w=634&q=80" alt=""/>
																		</div>
																</div>

																<div className='tech'>
																	<div className="">
																		TECH
																	</div>
																	<div className="">
																		{/* <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png' height='100px'/> */}
																		<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png' height='100px'/>
																		<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png' height='100px'/>
																		<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png' height='100px'/>
																		<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png' height='100px'/>
																		<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png' height='100px'/>
																		<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png' height='100px'/>
																		<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png' height='100px'/>
																		<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png' height='100px'/>
																		{/* <img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" alt="Thumbnail image" height='100px'/> */}
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
