import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import About from './components/pages/About';

import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Navbar from './components/layout/Navbar';
import Alerts from './components/layout/Alerts';

import ContactState from './context/contact/ContactState';
import AuthtState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {
  return (
    <AuthtState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className='container'>
                <Alerts />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/about' component={About} />
                  <Route path='/login' component={Login} />
                  <Route path='/register' component={Register} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthtState>
  );
};

export default App;
