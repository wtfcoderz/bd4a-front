import React from 'react'
import { Grid, Form, Segment } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'

export default class Login extends React.Component {
  render () {
    return (
      <Grid verticalAlign='middle' textAlign='center'>
        <Grid.Column width={3}>
          <Form size='large'>
            <Segment>
              <Form.Input fluid placeholder='Mail' icon='user' iconPosition='left'/>
              <Form.Input fluid placeholder='Password' icon='lock' iconPosition='left'/>
              <Form.Button fluid primary>Submit</Form.Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}
