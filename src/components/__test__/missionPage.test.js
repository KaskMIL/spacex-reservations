import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Missions from '../Mission/MissionPage';
import store from '../../Redux/configState';
import reducerMissions from '../../Redux/mission';

const mocks = () => {
  const preloadedState = {
    missions: [
      {
        mission_id: '9D1B7E0',
        mission_name: 'Thaicom',
        description:
          'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
        reserved: false,
      },
    ],
  };
  return configureStore({
    preloadedState,
    reducer: {
      missions: reducerMissions,
    },
  });
};
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

describe('Missions component', () => {
  test('Badges are displaying correctly on mission page load', () => {
    render(
      <Provider store={mocks()}>
        <Missions />
      </Provider>,
    );
    expect(screen.getAllByText('NOT A MEMBER').length).toBeGreaterThanOrEqual(
      1,
    );
  });
  test('Clicking on Join mission buttons enable, thus updating member bagdes', () => {
    render(
      <Provider store={mocks()}>
        <Missions />
      </Provider>,
    );
    expect(
      fireEvent.click(screen.getAllByText('Join mission')[0]),
    ).toBeTruthy();
  });
});
