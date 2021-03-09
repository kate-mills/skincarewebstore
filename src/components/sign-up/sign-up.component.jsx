import React from 'react';

import FormInput from '../form-input/form-input.component';
import Btn from '../btn/btn.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const {displayName, email, password, confirmPassword } = this.state;

    if(password !== confirmPassword){
      console.log('NOOOOOOO', password, confirmPassword, email, displayName)
      alert('passwords don\'t match');
      return
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, {displayName})

      this.setState({displayName: '', email: '', password: '', confirmPassword: ''});
    } catch (error) {
      console.log('err', error)
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-up'>
        <h2>I don't have an account</h2>
        <span>Sign up with your email and password</span>

        <form 
          className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            handleChange={this.handleChange}
            value={this.state.displayName}
            label='Name'
            autoComplete="off"
            required
          />
          <FormInput
            type='email'
            name='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            autoComplete="off"
            required
          />
          <FormInput
            type='password'
            name='password'
            handleChange={this.handleChange}
            value={this.state.password}
            label='password'
            autoComplete="off"
            minLength="6"
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            handleChange={this.handleChange}
            value={this.state.confirmPassword}
            label='confirm password'
            autoComplete="off"
            minLength="6"
            required
          />
          <Btn type='submit'> Sign up </Btn>
        </form>
      </div>
    );
  }
}

export default SignUp;
