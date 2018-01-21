import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';
// import ActionFavorite from 'material-ui/svg-icons/action/favorite';
// import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

import logo from './logo.svg';
import './App.css';

// const styles = {
//   margin: 12,
//   block: {
//     maxWidth: 250,
//   },
//   radioButton: {
//     marginBottom: 16,
//   },
// };

// what is significance of theme?
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

/* <RaisedButton label="Default" /> */
/*
  <Radio
    value="ludicrous"
    label="Custom icon"
    checkedIcon={<ActionFavorite style={{color: '#F44336'}} />}
    uncheckedIcon={<ActionFavoriteBorder />}
    style={styles.radioButton}
  />
*/


class App extends Component {
  propTypes = {
    classes: PropTypes.object.isRequired,
  };

  state = {
    value: '',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <h1>tests for material ui</h1>

          <TextField hintText="Hint Text"/><br />

          <TextField id="text-field-default" defaultValue="Default Value"/>
          <br />
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
                onChange={this.handleChange}
              >
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
                <FormControlLabel value="disabled" disabled control={<Radio />} label="Disabled" />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
      </div>
    );
  }
}

  // propTypes = {
  //   classes: PropTypes.object.isRequired,
  // };

export default withStyles(styles)(App);
