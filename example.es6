import React from 'react';
import WinSharebar from '.';
import Icon from '@economist/component-icon';

export default (
  <div className="header">
    <div className="header__spacer" />
    <div className="header__share">
      <WinSharebar />
    </div>
    <div className="header__home">
      <Icon size="49px" icon="home" />
    </div>
    <div className="header__hamburger">
      <Icon size="49px" icon="hamburger" />
    </div>
  </div>
);
