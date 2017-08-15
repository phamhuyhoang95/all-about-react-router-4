import React, { Component } from 'react';

class CardInterests extends Component {
  render() {
    return (
      <div className="w3-card-2 w3-round w3-white w3-hide-small">
        <div className="w3-container">
          <p>Interests</p>
          <p>
            <span className="w3-tag w3-small w3-theme-d5">HTML5</span>
            <span className="w3-tag w3-small w3-theme-d4">CSS3</span>
            <span className="w3-tag w3-small w3-theme-d3">Javascript</span>
            <span className="w3-tag w3-small w3-theme-d2">Jquery</span>
            <span className="w3-tag w3-small w3-theme-d1">Bootstrap</span>
            <span className="w3-tag w3-small w3-theme">Pugjs</span>
            <span className="w3-tag w3-small w3-theme-l1">SASS</span>
            <span className="w3-tag w3-small w3-theme-l2">BEM</span>
            <span className="w3-tag w3-small w3-theme-l3">Design</span>
            <span className="w3-tag w3-small w3-theme-l4">JS Framework</span>
            <span className="w3-tag w3-small w3-theme-l5">React</span>
            <span className="w3-tag w3-small w3-theme-l6">React with Redux</span>
            <span className="w3-tag w3-small w3-theme-l7">English</span>
          </p>
        </div>
      </div>
    );
  };
};

export default CardInterests;


