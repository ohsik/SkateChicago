import React, { Component } from 'react'
import Schedule from './Schedule'
import Hotel from './Hotel'
import SocialMedia from './SocialMedia'
import Rsvp from './Rsvp'

class Body extends Component {
  render() {
    return (
      <div className="main-content">
        <Schedule />
        <Hotel />
        <SocialMedia />
        <Rsvp />
      </div>
    );
  }
}

export default Body;
