import React from "react"
import { Grid, Form, Segment } from 'semantic-ui-react'
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
      <Grid verticalAlign='middle' textAlign='center'>
        <Grid.Column width={3}>
          <Form size='large'>
            <Segment>
              <Form.Input fluid placeholder='Mail' icon='user' iconPosition='left'/>
              <Form.Input fluid placeholder='Mail Verification' icon='user' iconPosition='left'/>
              <Form.Input type='password' fluid placeholder='Password' icon='lock' iconPosition='left'/>
              <Form.Input type='password' fluid placeholder='Password Vérification' icon='lock' iconPosition='left'/>
              <Form.Button fluid primary>Submit</Form.Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}
