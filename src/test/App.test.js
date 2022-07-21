import renderer from 'react-test-renderer';
import {
  render, screen, waitFor,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/configState';
import App from '../components/App';

describe('Body of the whole Rocket Page', () => {
  it('Check Falcon 1 in the DOM', async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    await waitFor(() => {
      const waitForDOM = screen.findByText(
        /The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth./,
      );
      expect(waitForDOM).not.toBeNull();
    });
  });

  it('Check Falcon 9 in the DOM', async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    await waitFor(() => {
      const waitForDOM = screen.findByText(
        /Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit./,
      );
      expect(waitForDOM).not.toBeNull();
    });
  });

  it('Check Falcon Heavy in the DOM', async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    await waitFor(() => {
      const waitForDOM = screen.findByText(
        /With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost./,
      );
      expect(waitForDOM).not.toBeNull();
    });
  });

  it('Check Starship in the DOM', async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    await waitFor(() => {
      const waitForDOM = screen.findByText(
        /Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon./,
      );
      expect(waitForDOM).not.toBeNull();
    });
  });

  it('It matches snapshot', () => {
    const Tree = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    ).toJSON();
    expect(Tree).toMatchSnapshot();
  });
});
