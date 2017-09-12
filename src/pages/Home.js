import React from 'react'
// import { Link } from 'react-router-dom'
import {
  Segment,
  Container,
  Header
} from 'semantic-ui-react'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Segment
          inverted
          textAlign='center'
          style={{ minHeight: 700, padding: '1em 0em' }}
          vertical>
          <Container text textAlign='center'>
            <Header
              as='h1'
              content='Big Data for All'
              style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
              inverted
              />
          </Container>
        </Segment>
      </div>
    )
  }
}
