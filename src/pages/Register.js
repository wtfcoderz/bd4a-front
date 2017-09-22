import React from "react"
import { Grid, Segment, Header, Message } from 'semantic-ui-react'
import Axios from 'axios'
import { Form } from 'formsy-semantic-ui-react'

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

  render () {
    return (
      <Grid verticalAlign='middle' textAlign='center'>
        <Grid.Column width={3}>
          <Form size='large'>
            <Segment>
              <Header>Register</Header>
              <Form.Input
                fluid
                placeholder='Mail'
                icon='user'
                iconPosition='left'
                validations='isEmail'
                validationErrors={{ isEmail: 'Email is not valid' }}
                errorLabel={ <Message icon='delete' negative size='mini' /> }
                name='mail'/>
              <Form.Input
                fluid
                placeholder='Mail Verification'
                icon='user'
                iconPosition='left'
                name='mail_validation'/>
              <Form.Input
                type='password'
                fluid
                placeholder='Password'
                icon='lock'
                iconPosition='left'
                name='password'/>
              <Form.Input
                type='password'
                fluid placeholder='Password Vérification'
                icon='lock'
                iconPosition='left'
                name='password_validation'/>
              <Form.Button fluid primary>Submit</Form.Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}
