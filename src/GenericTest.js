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

class GenericTest extends Component {
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
      <div>
        <div>
          <h1>Text input</h1>
          <TextField hintText="Hint Text"/><br />
          <TextField id="text-field-default" defaultValue="Default Value"/><br />
        </div>
        <div>
          <h1>Button test</h1>
          <p>couldn't get the syntax correct</p>
          {/* <Button raised className={classes.button}>
            Default
          </Button>
          <Button raised color="primary" className={classes.button}>
            Primary
          </Button>*/}
        </div>

        <div>
          <h1>radio button</h1>
          <div className={classes.root}>
            <FormControl component="fieldset" required className={classes.formControl}>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                className={classes.group}
                value={this.state.value}
                onChange={this.handleChangeRadio}
              >
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
                <FormControlLabel value="disabled" disabled control={<Radio />} label="Disabled" />
              </RadioGroup>
            </FormControl>
          </div>
        </div>

        <div>
          <h1>checkbox test</h1>
          <FormControl component="fieldset">
            <FormLabel component="legend">Assign responsibility</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.gilad}
                    onChange={this.handleChangeCheck('gilad')}
                    value="gilad"
                  />
                }
                label="Gilad Gray"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.jason}
                    onChange={this.handleChangeCheck('jason')}
                    value="jason"
                  />
                }
                label="Jason Killian"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.antoine}
                    onChange={this.handleChangeCheck('antoine')}
                    value="antoine"
                  />
                }
                label="Antoine Llorca"
              />
            </FormGroup>
            <FormHelperText>Be careful</FormHelperText>
          </FormControl>
        </div>


        <div>
          <h1>test buttons</h1>
          <Button raised className={classes.button}>
            Default
          </Button>
          <Button raised color="primary" className={classes.button}>
            Primary
          </Button>
          <Button raised color="accent" className={classes.button}>
            Accent
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(GenericTest);
