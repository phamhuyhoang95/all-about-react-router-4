import React, { Component } from 'react';

class CardProfile extends Component {
  render() {
    return (
      <div className="w3-card-2 w3-round w3-white">
        <div className="w3-container">
          <h4 className="w3-center">My Profile</h4>
          <p className="w3-center">
            <img src="https://avatars1.githubusercontent.com/u/25724537?v=4" className="w3-circle" style={{ height: '106px', width: '106px' }} alt="Avatar" />
          </p>
          <hr />
          <p><i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i> Frontend Dev, UI</p>
          <p><i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i> Da Nang, VIET NAM</p>
          <p><i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i> April 7, 1996</p>
        </div>
      </div>
    );
  };
};

export default CardProfile;
