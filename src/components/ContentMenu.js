import React from 'react';
import PropType from 'prop-types';

export const ContentMenu = (props) => {
  const subtitles = ["Plats", "Burgers", "Desserts", "Drinks"]
  return (
    <div className="content-menu">
      <h1>Menu</h1>
      <div className="container section-images">
          <h3 className="subtitles">{subtitles[0]}</h3>
          {props.listDish}
          <h3 className="subtitles">{subtitles[1]}</h3>
          {props.listBurger}
          <h3 className="subtitles">{subtitles[2]}</h3>
          {props.listDessert}
          <h3 className="subtitles">{subtitles[3]}</h3>
          {props.listDrink}
      </div>
    </div>
  );
}

ContentMenu.propType = {
  subtitles: PropType.array,
  listDish: PropType.func,
  listBurger: PropType.func,
  listDessert: PropType.func,
  listDrink: PropType.func,
}