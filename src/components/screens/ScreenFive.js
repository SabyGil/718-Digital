import React from 'react';
import axios from 'axios';
import { Consumer } from '../../context';

class ScreenFive extends React.Component {

  state = {
    name: '',
    email:'',
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

    const { name, email, message } = this.state;

    if (name === '') {
      this.setState({
         errors: { name: 'Name is required' }
       });
      return;
    }

    if (email === '') {
      this.setState({
         errors: { email: 'Email is required' }
       });
      return;
    }

    if (message === '') {
      this.setState({
         errors: { message: 'Message is required' }
       });
      return;
    }

    const formEntry = {
      name,
      email,
      message
    }

    axios.post('https://web-718-digital.herokuapp.com/contact', formEntry)
    .then(() => console.log(formEntry, 'HERE')
  )
    // axios.post(formEntry)
    // .then(res => dispatch({
    //   type: 'FORM_ENTRY',
    //   payload: res.data
    // }))

//clear state
    this.setState({
      name: '',
      email: '',
      message: '',
      errors: {}
    })
  }

  render(){
    const { name, email, message, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className='view-container' style={{'backgroundColor':'maroon'}}>
              <div className="section-box screen-five-content">
                <div className='contact-heading'>
                  <h1>Contact</h1>
                </div>
                <div className='five-left'>
                  <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  {/* <form> */}
                    <div className="form-group">
                      <input
                        type="text"
                        label='Name'
                        name='name'
                        className=''
                        placeholder='Enter Name'
                        onChange={this.onChange}
                        value={name}
                        error={errors.name}
                      />
                    </div>
                    {/*  */}
                    <div className="form-group">
                      <input
                        type="email"
                        label='Email'
                        name='email'
                        className=''
                        placeholder='Enter Email'
                        onChange={this.onChange}
                        value={email}
                        error={errors.email}
                      />
                    </div>
                    {/*  */}
                    <div className="form-group">
                      <textarea
                        label='Message'
                        name='message'
                        className=''
                        placeholder='Enter Message'
                        onChange={this.onChange}
                        value={message}
                        error={errors.message}
                         >
                         Enter text here...
                     </textarea>

                      {/* <input
                        type="t"
                        label='Message'
                        name='message'
                        className=''
                        placeholder='Enter Message'
                        onChange={this.handleChange}
                        value={message}
                        error={errors.message}
                      /> */}
                    </div>

                    <input type="submit" value='Submit' className="btn btn-light btn-block" />

                  </form>

                </div>
                <div className='five-right'>
                    <div className='circle'></div>
                    <div className='circle'></div>
                    <div className='circle'></div>
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
