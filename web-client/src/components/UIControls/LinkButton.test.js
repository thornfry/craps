import React from 'react';
import { LinkButton } from './LinkButton';
import { render } from '@testing-library/react';
import { wrapInRouter } from '../HOC/wrapInRouter';

describe('LinkButton', () => {
  it('should render displayText', () => {
    const testProps = {
      location: '/home',
      displayText: 'Click Me'
    };
    const { getByText } = render(wrapInRouter(<LinkButton {...testProps} />));
    expect(getByText('Click Me')).toBeDefined();
  });
  it('should link to the location from props', () => {
    const testProps = {
      location: '/home',
      displayText: 'Click Me'
    };
    const { getByText } = render(wrapInRouter(<LinkButton {...testProps} />));
    expect(getByText('Click Me')).toBeDefined();
  });
});