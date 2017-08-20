import React from 'react'
import { Link } from 'react-router-dom'
import {
  Menu,
  Container,
  Button
} from 'semantic-ui-react'

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Menu fixed='top' size='large'>
          <Container>
            <Menu.Item as={Link} to="/" active>Home</Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item className='item'>
                <Button as={Link} to="/login">Log in</Button>
              </Menu.Item>
              <Menu.Item>
                <Button as={Link} to="/register" primary>Register</Button>
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </header>
    )
  }
}
