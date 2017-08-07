import React from "react"
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import TextField from 'material-ui/TextField'

export default class Login extends React.Component {
  render () {
    return (
      <Grid container align="center" justify="center" spacing={0}>
        <Grid item xs={2}>
          <Paper>
            <Grid container align="center" justify="flex-start" direction="column">
              <Grid item xs={12}>
                <TextField
                  id="account"
                  label="Account"
                  margin="normal"
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  margin="normal"
                  />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}
