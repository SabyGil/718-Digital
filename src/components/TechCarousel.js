import React from 'react';
// import $ from 'jquery';
// window.$ = window.jQuery = require('jquery');
// const OwlCarousel = require('react-owl-carousel');
// import Modal from 'react-modal';
// window.jQuery = $;
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class TechCarousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			options: {
				// mouseDrag: true,
				// touchDrag: true,
				// loop: false,
				// margin: 10,
				// animateOut: true,
				rewind: true,
				nav: false,
				responsive: {
					0: {
						items: 1
					},
					600: {
						items: 3
					},
					1000: {
						items: 5
					}
				}
			},
			modalIsOpen: false,
			modal: false

		};
		this.toggleMenu = this.toggleMenu.bind(this)
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

	toggleMenu (){
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
		const items = this.state.options.responsive.items;
		return(
			<React.Fragment>
        {slides.length > 0 ?
        <OwlCarousel className="owl-theme"
					navText={items > 5 ?['<','>']: []}
					// navText={['<','>']}
          margin={10}
          // nav
          {...this.state.options}>
             {slides.map((content, id) => {
              return (
                <div className="item" key={content.id}>
	                <p>{content.name}</p>
									<Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
								 <Modal isOpen={this.state.modal} toggle={this.toggle}>
									 <ModalBody>
									 Lorem ipsum dolor sit amet,
	                  {/* <p>{content.about}</p>
	                  <p>{content.client_or_team}</p> */}
									{/* <button onClick={()=>this.openModal()}>modal btn</button> */}
									</ModalBody>
										 <ModalFooter>
											 <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
											 <Button color="secondary" onClick={this.toggle}>Cancel</Button>
										 </ModalFooter>
									</Modal>
                </div>
              )}
            )}
        </OwlCarousel>
        : ""}
				{/* {this.state.modalIsOpen ?
						<Modal
								isOpen={this.state.modalIsOpen}
								onRequestClose={this.closeModal}>
								<button onClick={()=>this.closeModal()}>modal btn</button>
								Hello world
								{'some modal content'}
							<p>{content.client_or_team}</p>
						</Modal>
				: null} */}
				{/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#${content.name}`}>modal btn</button>

				<div className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						...
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
						<button type="button" className="btn btn-primary">Save changes</button>
					</div>
					</div>
				</div>
				</div> */}
      </React.Fragment>
		);
	}
}
