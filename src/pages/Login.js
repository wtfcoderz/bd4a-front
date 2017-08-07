import React from "react"
import TextField from 'material-ui/TextField'

export default class Login extends React.Component {
  render () {
    return (
      <div>
        <TextField
          id="account"
          label="Account"
        />
        <TextField
          id="password"
          label="Password"
          type="password"
        />
      </div>
    )
  }
}
