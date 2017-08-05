import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'

export default class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>
        </Switch>
      </main>
    )
  }
}
