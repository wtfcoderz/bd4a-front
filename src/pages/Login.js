import React from "react"
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import { Link } from 'react-router-dom'

export default class Login extends React.Component {
  render () {
    return (
      <Grid container align="center" justify="center" spacing={0}>
        <Grid item xs={2}>
          <Paper style={{paddingBottom: "20px"}}>
            <Grid container align="center" justify="center" direction="row">
              <Grid item xs={12} style={{textAlign: "center"}}>
                <TextField
                  id="email"
                  label="Mail"
                  margin="normal"
                  />
              </Grid>
              <Grid item xs={12} style={{textAlign: "center"}}>
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  margin="normal"
                  />
              </Grid>
              <Grid item xs={6} style={{textAlign: "center"}}>
                <Button color="primary" component={Link} to="/register">Register</Button>
              </Grid>
              <Grid item xs={6} style={{textAlign: "center"}}>
                <Button raised color="primary">Login</Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}
