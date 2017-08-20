import React from "react"
// import { Link } from 'react-router-dom'

export default class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      email_check: '',
      password: '',
      password_check: ''
    }
  }
  onRegister() {
    console.log('register')
  }

  validateEmail() {
    console.log('validate mail')
  }

  validateEmailVerification() {
    console.log('verify email')
    this.validateEmail()
  }

  handleInputChange(ev) {
    let target = ev.target
    this.setState({
      [target.id]: target.value
    })
  }

  render () {
    return (
      <div>Register</div>
    )
  }
}
