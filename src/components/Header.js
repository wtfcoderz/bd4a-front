import React from 'react'
import { Link } from 'react-router-dom'
import {
  Menu,
  Container,
  Button,
  Icon
} from 'semantic-ui-react'
import axios from 'axios'

export default class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      color: 'black',
      disabled: true
    };
  }

  componentDidMount() {
    axios.get('http://localhost:10000/health')
      .then(res => {
        console.log(res)
        this.setState({
          color: 'green',
          disabled: false
        })
      })
      .catch(err => {
        this.setState({
          color: 'red',
          disabled: false
        })
      })
  }

  render() {
    return (
      <header>
        <Menu fixed='top' size='large' icon>
          <Container>
            <Menu.Item as={Link} to="/" active>Home</Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item>
                <Icon name='lightning' color={this.state.color} fitted size='large' disabled={this.state.disabled}/>
              </Menu.Item>
              <Menu.Item>
              <Button as={Link} to="/register">Register</Button>
              </Menu.Item>
              <Menu.Item>
                <Button as={Link} to="/login" primary>Log in</Button>
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </header>
    )
  }
}
