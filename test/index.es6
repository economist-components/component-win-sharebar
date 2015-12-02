import React from 'react';
import chai from 'chai';
chai.should();

import WinSharebar from '..';

describe('WinSharebar', () => {
  it('renders a React element', () => {
    React.isValidElement(
      <WinSharebar />
    ).should.equal(true);
  });
});
