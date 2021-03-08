import React from 'react'
import FormInput from '../form-input/form-input.component'
import Btn from '../btn/btn.component'
import './sign-in.styles.scss'

class SignIn extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }
  handleSubmit = e =>{
    e.preventDefault()
    this.setState({email: '', password: ''})
  }
  handleChange = e =>{
    const { value, name } = e.target
    this.setState({ [name]: value  })
  }
  render() {
    return(
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email & password.</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="email"
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="password"
            name="password"
            type="password"
            autoComplete="currentpassword"
            value={this.state.password} 
            handleChange={this.handleChange}
            required
          />
          <Btn type="submit">Sign In</Btn>
        </form>
      </div>
    )

  }

}
export default SignIn
