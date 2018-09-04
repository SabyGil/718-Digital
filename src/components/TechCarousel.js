import React from 'react';
import Slider from "react-slick";

// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button,  ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Modal from 'react-modal';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default class TechCarousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalIsOpen: false,
			modal: false
		}
	}
	// componentDidMount(){
	// 	window.jQuery = $;
	// }
	// openModal = () => {
	// 	this.setState(()=>{
	// 		return {
	// 			modalIsOpen: true
	// 		}
	// 	})
	// }
	//
	// closeModal = () => {
	// 	this.setState(()=>{
	// 		return {
	// 			modalIsOpen: false
	// 		}
	// 	})
	// }

	toggleMenu = () => {
		this.setState({
			modalIsOpen: !this.state.modalIsOpen
		});
	}

	toggle = () => {
	this.setState({
		modal: !this.state.modal
	});
}

	render() {
		const {
			slides
		} = this.props
		// console.log(this.props.match)
		// console.log(this.state.modalIsOpen)
		// const items = this.state.options.responsive.items;

		const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1
	};
		return(
			<React.Fragment>
        {/* {slides.length > 0 ? */}
					<Slider {...settings}>

             {slides.map((content, id) => {
              return (
                <div className="item rounded-circle d-block" key={content.id}>
	                <p>{content.name}</p>
									<Button color="danger" onClick={this.toggleMenu}>BUTTON</Button>
									{this.state.modalIsOpen ?
											<Modal
												className='tech-modal'
													isOpen={this.state.modalIsOpen}
													onRequestClose={this.toggleMenu}
													overlayClassName='overlay'
													>
													<button onClick={this.toggleMenu}>modal btn</button>
													Hello world
													{'some modal content'}
												<p>{content.client_or_team}</p>
											</Modal>
									: null}
                </div>
              )}
            )}
        </Slider>

      </React.Fragment>
		);
	}
}

Modal.setAppElement('#root')
