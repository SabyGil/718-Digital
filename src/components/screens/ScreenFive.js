import React from 'react';
import axios from 'axios';
import {
	Consumer
} from '../../context';
import api from '../../utils/api';
import ContactForm from '../ContactForm';
import {
	withRouter
} from 'react-router-dom';

class FifthScreen extends React.Component {

	state = {
		name: '',
		email: '',
		message: '',
		errors: {}
	}

	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	onSubmit = (dispatch, e) => {
		e.preventDefault();

		const {
			name,
			email,
			message
		} = this.state;

		if(name === '') {
			this.setState({
				errors: {
					name: 'Name is required'
				}
			});
			return;
		}

		if(email === '') {
			this.setState({
				errors: {
					email: 'Email is required'
				}
			});
			return;
		}

		if(message === '') {
			this.setState({
				errors: {
					message: 'Message is required'
				}
			});
			return;
		}

		const formEntry = {
			name,
			email,
			message
		}

		api.contactForm(formEntry)
			.then(res => dispatch({
				type: 'FORM_ENTRY',
				payload: res.data
			}))

		//clear state
		this.setState({
			name: '',
			email: '',
			message: '',
			errors: {}
		})
	}

	render() {
		const {
			name,
			email,
			message,
			errors
		} = this.state;
		const {
			hash
		} = this.props.location
		return (
			<Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className='view-container bg-five'>
							<div id={hash == "#Contact" ? 'border-animation' : ''}/>
              <div className="section-box screen-five">
                <div className='screen-five__contact-heading'>
                  <h1 className='display-1'>Contact</h1>
                </div>
                <div className='screen-five__contact-form'>
                  <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                    <ContactForm
											label='Name'
	                    name='name'
	                    placeholder='Enter Name'
	                    value={name}
	                    onChange={this.onChange}
	                    error={errors.name}
											hash={hash}
										 />
										<ContactForm
	                     label='Email'
	                     name='email'
	                     type='email'
	                     placeholder='Enter Email'
	                     value={email}
	                     onChange={this.onChange}
	                     error={errors.email}
											 hash={hash}
	                   />
                    <ContactForm
                      label='Message'
                      name='message'
                      placeholder='Enter Message'
                      onChange={this.onChange}
                      value={message}
                      error={errors.message}
											hash={hash}
                     />
                    <input type="submit" value='Submit' className="btn btn-block p-3 --submit-btn" />
                  </form>
                </div>
                <div className='screen-five__social-media'>
                  <div className='circle'>
                    <i className="fab fa-twitter"/>
                  </div>
                  <div className='circle'>
                    <i className="fab fa-google-plus-g"/>
                  </div>
                  <div className='circle'>
                    <i className="fab fa-facebook-square"/>
                  </div>
                  <div className='circle'>
                    <i className="fab fa-facebook-square"/>
                  </div>
                </div>
              </div>
            </div>
          )}
        }
      </Consumer>
		)
	}
}

const ScreenFive = withRouter(FifthScreen)


export default ScreenFive;
