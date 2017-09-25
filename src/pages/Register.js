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
      password_check: '',
      submittable: false
    }
  }

  setSubmittable() {
    this.setState({submittable: true})
  }

  unsetSubmittable() {
    this.setState({submittable: false})
  }

  register(formData) {
    console.log(formData);
  }

  render () {
    return (
      <Grid verticalAlign='middle' textAlign='center'>
        <Grid.Column width={3}>
          <Form
            size='large'
            onValidSubmit={ (formData) => this.register(formData) }
            onValid={() => this.setSubmittable()}
            onInvalid={() => this.unsetSubmittable()}>
            <Segment>
              <Header>Register</Header>
              <Form.Input
                fluid
                label='Mail'
                placeholder='Mail'
                icon='user'
                iconPosition='left'
                validations={{ isEmail: true, minLength: 1}}
                validationErrors={{ isEmail: 'Email is not valid', minLength: 'Mandatory field' }}
                errorLabel={ <Message icon negative size='mini' ></Message> }
                name='mail'/>
              <Form.Input
                fluid
                placeholder='Mail Verification'
                icon='user'
                iconPosition='left'
                validations={{ isEmail: true, equalsField: 'mail', minLength: 1}}
                validationErrors={{
                  isEmail: 'Email is not valid',
                  equalsField: 'Emails are different',
                  minLength: 'Mandatory field'
                }}
                errorLabel={ <Message icon negative size='mini' ></Message> }
                name='mail_validation'/>
              <Form.Input
                type='password'
                fluid
                placeholder='Password'
                icon='lock'
                iconPosition='left'
                validations={{ minLength: 1}}
                validationErrors={{ minLength: 'Mandatory field' }}
                errorLabel={ <Message icon negative size='mini' ></Message> }
                name='password'/>
              <Form.Input
                type='password'
                fluid placeholder='Password Vérification'
                icon='lock'
                iconPosition='left'
                validations={{ equalsField: 'password', minLength: 1 }}
                validationErrors={{ equalsField: 'Passwords are different', minLength: 'Mandatory field' }}
                errorLabel={ <Message icon negative size='mini' ></Message> }
                name='password_validation'/>
              <Form.Button fluid primary disabled={ !this.state.submittable }>Submit</Form.Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}
