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
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel, FormHelperText,
  FormGroup, } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
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
  gilad: true,
  jason: false,
  antoine: true,
});

class Login extends Component {
  propTypes = {
    classes: PropTypes.object.isRequired,
  };

  state = {
    value: '',
  };

  handleChangeRadio = (event, value) => {
    this.setState({ value });
  };

  handleChangeCheck = name => (event, checked) => {
    this.setState({ [name]: checked });
  };

  render() {
    const { classes } = this.props;

    return (
      <div class="container align-left">
        <h1>Test Login</h1>
        <TextField id="email" defaultValue="user@email.com" hintText="Hint Text"/><br />
        <TextField id="password" defaultValue="password" hintText="Hint Text"/><br />
        <Button raised className={classes.button}>
          Default
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
