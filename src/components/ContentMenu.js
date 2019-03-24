import React from 'react';

export const ContentMenu = (props) => {
  return (
    <div className="content-menu">
      <h1>Menu Page</h1>
      <div className="container section-images">
      <p>{props.listImage}</p>
      </div>
    </div>
  );
}