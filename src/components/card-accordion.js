import React, { Component } from 'react';

class CardAccordion extends Component {
  render() {
    return (
      <div className="w3-card-2 w3-round">
        <div className="w3-white">
          <button className="w3-button w3-block w3-theme-l1 w3-left-align">
            <i className="fa fa-circle-o-notch fa-fw w3-margin-right"></i> My Groups
          </button>
          <div className="w3-hide w3-container">
            <p>Some text..</p>
          </div>
          <button className="w3-button w3-block w3-theme-l1 w3-left-align">
            <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i> My Events
          </button>
          <div className="w3-hide w3-container">
            <p>Some other text..</p>
          </div>
          <button className="w3-button w3-block w3-theme-l1 w3-left-align">
            <i className="fa fa-users fa-fw w3-margin-right"></i> My Photos
          </button>
          <div className="w3-hide w3-container">
        <div className="w3-row-padding">
        <br />
          <div className="w3-half">
            <img src="https://avatars1.githubusercontent.com/u/25724537?v=4" style={{ width: '100%' }} className="w3-margin-bottom" />
          </div>
          <div className="w3-half">
            <img src="https://avatars1.githubusercontent.com/u/25724537?v=4" style={{ width: '100%' }} className="w3-margin-bottom" />
          </div>
          <div className="w3-half">
            <img src="https://avatars1.githubusercontent.com/u/25724537?v=4" style={{ width: '100%' }} className="w3-margin-bottom" />
          </div>
          <div className="w3-half">
            <img src="https://avatars1.githubusercontent.com/u/25724537?v=4" style={{ width: '100%' }} className="w3-margin-bottom" />
          </div>
          <div className="w3-half">
            <img src="https://avatars1.githubusercontent.com/u/25724537?v=4" style={{ width: '100%' }} className="w3-margin-bottom" />
          </div>
          <div className="w3-half">
            <img src="https://avatars1.githubusercontent.com/u/25724537?v=4" style={{ width: '100%' }} className="w3-margin-bottom" />
          </div>
        </div>
          </div>
        </div>
      </div>
    );
  };
};

export default CardAccordion;
