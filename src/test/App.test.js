import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../components/App';

describe('Body of the whole App', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Expect it to render the home page', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(
      screen.getByText(
        /The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth./,
      ),
    ).not.toBeNull();
  });

  it('Making sure the profile page renders', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const profile = screen.getByText('My Profile');

    fireEvent.click(profile);
  });
});
