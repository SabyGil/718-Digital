import React from 'react';
import axios from 'axios';
import {
	Consumer
} from '../../context';
import api from '../../utils/api';

class ScreenFive extends React.Component {

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

		//   axios.post('https://web-718-digital.herokuapp.com/contact', formEntry)
		//   .then(() => console.log(formEntry, 'HERE')
		// )
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
		
		return (
			<Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className='view-container' style={{'backgroundColor':'#777'}}>
              <div className="section-box screen-five">
                <div className='screen-five__contact-heading'>
                  <h1 className='display-1'>Contact</h1>
                </div>
                <div className='screen-five__contact-form'>
                  <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  {/* <form> */}
                    <div className="form-group">
                      <label htmlFor="name" className='d-block'>Name:</label>
                      <input
                        type="text"
                        label='Name'
                        name='name'
                        className='form-control'
                        placeholder='John Smith'
                        onChange={this.onChange}
                        value={name}
                        error={errors.name}
                      />
                    </div>
                    {/*  */}
                    <div className="form-group">
                      <label htmlFor="email" className='d-block'>Email:</label>
                      <input
                        type="email"
                        label='Email'
                        name='email'
                        className='form-control'
                        placeholder='Enter Email'
                        onChange={this.onChange}
                        value={email}
                        error={errors.email}
                      />
                    </div>
                    {/*  */}
                    <div className="form-group">
                      <label htmlFor="message" className='d-block label-light'>Message:</label>
                      <textarea
                        label='Message'
                        name='message'
                        className='form-control'
                        placeholder='Enter Message'
                        onChange={this.onChange}
                        value={message}
                        error={errors.message}
                         >
                         Enter text here...
                     </textarea>

                    </div>

                    <input type="submit" value='Submit' className="btn btn-block p-3 --purple" />

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
                </div>
              </div>
            </div>
          )
        }
        }
      </Consumer>
		)
	}
}

export default ScreenFive;
