import React from 'react';

export class SocialNetwork extends React.Component {
  render() { 

    const network = {
      facebook: <i className="fab fa-facebook-f"></i>,
      twitter: <i className="fab fa-twitter"></i>,
      instagram: <i className="fab fa-instagram"></i>,
      pinterest: <i className="fab fa-pinterest"></i>
    }

    const icons = [network.facebook, network.twitter, network.instagram, network.pinterest];
    const iconsList = icons.map((icon, i) => <li key={'icon_' + i}>{icon}</li>)
    return (
      <div id="social-network">
        <ul>
          {iconsList}
        </ul>
      </div>
    );
  }
}
