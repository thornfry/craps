import React from 'react';
import { PlayArea } from './PlayArea';
import { render } from '@testing-library/react';

describe('PlayArea', () => {
  it('should render', () => {
    render(<PlayArea />);
  });
});
