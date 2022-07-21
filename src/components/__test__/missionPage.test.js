import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Missions from '../Mission/MissionPage';
import store from '../../Redux/configState';

describe('Tests for the Missions component', () => {
  render(
    <Provider store={store}>
      <Missions />
    </Provider>,
  );
  test('expected to have the following text to appear on screen', () => {
    expect(screen.getByText('Missions')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
  });
  test(' the snapshot', () => {
    expect(screen.debug()).toMatchSnapshot();
  });
});
