import * as actions from '../Redux/DragonReducer';
import {
  render, screen, waitFor,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../Redux/configState';
import DragonPage from '../components/Dragon/DragonPage';

describe('Reducer tests', () => {
  test('Reducer return empty state if action is undefined', () => {
    const initial = [{dragon_id: '1', dragon_name: 'dragon1', dragon_type: 'type', dragon_description: 'description', dragon_image: 'image', reserved: false}];
    const action = () => ({type: 'unknown'});
    expect(actions.default(initial, action)).toEqual(initial);
  });
  test('Reserve Action converts to true reserved key', () => {
    const initial = [{dragon_id: '1', dragon_name: 'dragon1', dragon_type: 'type', dragon_description: 'description', dragon_image: 'image', reserved: false}];
    const final = [{dragon_id: '1', dragon_name: 'dragon1', dragon_type: 'type', dragon_description: 'description', dragon_image: 'image', reserved: true}];
    expect(actions.default(initial, actions.reserve(initial[0].dragon_id))).toEqual(final);
  });
  test('Cancel action converts to false reserved key', () => {
    const initial = [{dragon_id: '1', dragon_name: 'dragon1', dragon_type: 'type', dragon_description: 'description', dragon_image: 'image', reserved: true}];
    const final = [{dragon_id: '1', dragon_name: 'dragon1', dragon_type: 'type', dragon_description: 'description', dragon_image: 'image', reserved: false}];
    expect(actions.default(initial, actions.cancel(initial[0].dragon_id))).toEqual(final);
  })
})

describe('Body of the Dragons Page', () => {
  it('Check Dragon 1 appears in DOM', async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <DragonPage />
        </Provider>
      </MemoryRouter>
    );
    await waitFor(() => {
      const text = screen.findByText(
        /Dragon is a reusable spacecraft developed by SpaceX, an American private space transportation company based in Hawthorne, California. Dragon is launched into space by the SpaceX Falcon 9 two-stage-to-orbit launch vehicle. The Dragon spacecraft was originally designed for human travel, but so far has only been used to deliver cargo to the International Space Station (ISS)./
      );
      expect(text).not.toBeNull();
    });
  });
  it('Matches snapshot', () => {
    const Tree = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <DragonPage />
        </Provider>
      </MemoryRouter>
    ).toJSON();
    expect(Tree).toMatchSnapshot();
  });
});
