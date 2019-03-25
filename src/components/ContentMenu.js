import React from 'react';
import PropType from 'prop-types';

export const ContentMenu = (props) => {
  const subtitles = ["Plats", "Desserts"]
  return (
    <div className="content-menu">
      <h1>Menu</h1>
      <div className="container section-images">
          <h3 className="subtitles">{subtitles[0]}</h3>
          {props.listDish}
          <h3 className="subtitles">{subtitles[1]}</h3>
          {props.listDessert}
      </div>
    </div>
  );
}

ContentMenu.propType = {
  subtitles: PropType.array,
  listDish: PropType.func,
  listDessert: PropType.func
}