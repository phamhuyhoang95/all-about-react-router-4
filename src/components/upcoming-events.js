import React, { Component } from 'react';

class UpcomingEvents extends Component {
  render() {
    return(
      <div className="w3-card-2 w3-round w3-white w3-center">
        <div className="w3-container">
          <p>Upcoming Events:</p>
          <img src="https://avatars2.githubusercontent.com/u/176013?v=4" alt="Forest" style={{ width: '100%' }} />
          <p><strong>Holiday</strong></p>
          <p>Friday 15:00</p>
          <p><button className="w3-button w3-block w3-theme-l4">Info</button></p>
        </div>
      </div>
    );
  }
}

export default UpcomingEvents;
