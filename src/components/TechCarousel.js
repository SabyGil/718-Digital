import React from 'react';
import Slider from "react-slick";
// import { Button,  ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {
	Button
} from 'reactstrap';
import Modal from 'react-modal';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
	Consumer
} from '../context';

export default class TechCarousel extends React.Component {
	state = {
		activeModal: null
	}

	handleClick = (e, index, dispatch) => {
		this.setState({
			activeModal: index
		})
		dispatch({
			type: "OPEN_MODAL"
		})
	}

	hideModal = () => {
		this.setState({
			activeModal: null
		})
	}

	render() {
		const {
			slides
		} = this.props
		const {
			activeModal
		} = this.state;

		const settings = {
			// dots: true,
			// infinite: false,
			// speed: 500,
			// slidesToShow: 3,
			// slidesToScroll: 2,
			// arrows: true,
			// className: 'testing',
			//--
			// adaptiveHeight: true,
			dots: true,
			infinite: false,
			speed: 500,
			// slidesToShow: 4,
			// slidesToScroll: 4,
			dontAnimate: true,
			slidesToShow: 3,
			slidesToScroll: 2,
			initialSlide: 0,
			arrows: true,
			responsive: [{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: false,
						dots: true
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						initialSlide: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		};
		return (
			<Consumer>
				{value => {
					const { dispatch, modalIsOpen } = value;
					const { projects } = value.content;
					return (
						<React.Fragment>
							{/* {slides && */}
							{projects &&
								<Slider {...settings}>
									 {projects.map((project, index) => {
									 // {slides.map((project, id) => {
										return (
											<div className="item " key={project.id}>
												<p>{project.name}</p>
												<Button color="danger" onClick={e => this.handleClick(e, index, dispatch)}>View Details</Button>
												{activeModal === index ?
													<Modal
														className='tech-modal normal-scroll'
														isOpen={modalIsOpen}
														// onRequestClose={()=>dispatch({type:"CLOSE_MODAL"})}
														onRequestClose={this.hideModal}
														overlayClassName='overlay'
													  contentLabel="modal"
														closeTimeoutMS={500}
														>
															<div className="modal-outline">
																<div className='modal-title'>PROJECT</div>

																<div>
																	<div className="project">Project</div>
																	<p>{project.client_or_team}</p>

																</div>

																<div className='project-description'>
																	<button onClick={()=>dispatch({type:"CLOSE_MODAL"})} className='modal-close-btn'>
																			<i className="fas fa-times" />
																	</button>
																	<p className="lead display-3">
																		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut magnam expedita, quisquam similique. Hic doloremque suscipit cupiditate assumenda illum! Aliquid.
																		e assumenda illum! Aliquid
																		e assumenda illum! Aliquid
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

															{/* <p>{project.client_or_team}</p> */}
														</div>
													</Modal>
													: null}
											</div>
										)}
									)}
							</Slider>
							}
						</React.Fragment>
					)
				}}
			</Consumer>
		)
	}
}

Modal.setAppElement('#root')
