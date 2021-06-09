import React from 'react'
import './sign-in.styles.scss'

import {signInWithGoole, auth} from '../../firebase/firebase.utils'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

export default class SignIn extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }
  handleSubmit = async e =>{
    e.preventDefault()
    const {email, password} = this.state
    try{
      await auth.signInWithEmailAndPassword(email, password)
    }catch(e){
      console.log(e)
    }
    this.setState(
      {
        email: '',
        password: ''
      }
    )
  }
  handleChange = e =>{
    const {value, name} = e.target
    this.setState({[name]: value})
  }
  render(){
    return (
    <div className="sign-in">
      <h2>I already have account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={this.handleSubmit}>
        <FormInput
          name="email"
          type="email" 
          value={this.state.email}
          label="email"
          handleChange={this.handleChange} 
          // required
        />
        <FormInput
          name="password"
          type="password"
          value={this.state.password}
          label="password"
          handleChange={this.handleChange}
          // required
        />
        <div className="buttons">
          <CustomButton type="submit">sign in</CustomButton>
          <CustomButton onClick={signInWithGoole} isGoogleSignIn>sign in with Google</CustomButton>
        </div>
      </form>
    </div>
    )
  }
}