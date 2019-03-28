import React from 'react';
import { LeftContentOrder } from './components/LeftContentOrder';
import { MainContentOrder } from './components/MainContentOrder';
import { RightContentOrder } from './components/RightContentOrder';

export class OrderOnline extends React.Component {
  render() {
    return (
      <div id="content-order">
        <div className="left-content-order">
          <LeftContentOrder />
        </div>
        <div className="main-content-order">
          <MainContentOrder />
        </div>
        <div className="right-content-order">
          <RightContentOrder />
      </div>
    </div>
    );
  }
}
