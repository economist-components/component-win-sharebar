import React from 'react';
import ToggleDisplay from '@economist/component-toggle-display';
import Sharbar from '@economist/component-sharebar';
import Icon from '@economist/component-icon';

export default function WinSharebar() {
  return (
    <div className="win-sharebar">
      <ToggleDisplay
        openItem={<Icon icon="share" size="49px" />}
        closeItem={<Icon icon="close" size="49px" />}
      >
        <Sharbar />
      </ToggleDisplay>
    </div>
  );
}
