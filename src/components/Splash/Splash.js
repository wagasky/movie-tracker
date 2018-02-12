import React, { Component } from 'react';
import LogIn from '../../containers/LogIn/LogIn';
import Register from '../../containers/Register/Register'
import './Splash.css';
import PropTypes from 'prop-types';

class Splash extends Component {
  renderComponent = () => {
    const route = this.props.location.pathname;
    
    return route === "/login" ? <LogIn /> : <Register />
  }

  render() {

    return (
      <div className="splash-page">
       { this.renderComponent() }
      </div>
    )
  }
}

Splash.propTypes = {
  location: PropTypes.object,
}

export default Splash;