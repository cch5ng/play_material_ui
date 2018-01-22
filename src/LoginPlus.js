import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Icon from 'material-ui/Icon';
import logo from './logo.svg';
import './App.css';

// what is significance of theme?
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

class LoginPlus extends Component {
  propTypes = {
    classes: PropTypes.object.isRequired,
  };

  state = {
    value: '',
  };

  render() {
    const { classes } = this.props;

    return (
      <div class="container align-left">
        <h1>Login Enhanced</h1>
        <div>
          <Button className={classes.button} raised color="primary">
            Log in with
            <Icon className={classes.rightIcon}>Google</Icon>
          </Button>
          <Button className={classes.button} raised color="primary">
            Log in with
            <Icon className={classes.rightIcon}>Facebook</Icon>
          </Button>
        </div>
        <p>Log in with Google | Facebook</p>
        <TextField id="email" defaultValue="user@email.com" hintText="Hint Text"/><br />
        <TextField id="password" defaultValue="password" hintText="Hint Text"/><br />
        <Button raised className={classes.button}>
          Log In
        </Button>
        <p className="text-small">Forgot password?</p>
      </div>
    );
  }
}

export default withStyles(styles)(LoginPlus);
