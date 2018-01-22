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
import GenericTest from './GenericTest'
import Login from './Login'
import LoginPlus from './LoginPlus'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">tests for material ui</h1>
          </header>
          <Route exact path="/generic_test" component={GenericTest}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/login_plus" component={LoginPlus}/>
        </div>
      </Router>
    );
  }
}

export default App;
