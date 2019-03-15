import React from 'react';

export class ButtonTogglerDisplay extends React.Component {
  
  ButtonToggleClose() {
    let span = document.querySelector('span');
      if (span.textContent === "") {
        span.classList.remove("navbar-toggler-icon");
        span.textContent = "X";
      } else {
        span.textContent = "";
        span.classList.add("navbar-toggler-icon");
      }
      
      console.log(span);
  }

  
  render() {
    return (
      <button onClick={this.ButtonToggleClose} className="navbar-toggler btn btn-light" type="button" data-toggle="collapse" data-target="#navbar-link" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    );
  }
}