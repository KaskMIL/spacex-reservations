import { rocketReducer, getRocketAPI } from '../Redux/RocketAPIReducer';

describe('Reducer function', () => {
  it('It should return state', () => {
    const newState = rocketReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it('It should return new state if recieving type', () => {
    const post = [{
      id: 1,
      name: 'Tesla',
      type: 'Falcon 1',
      description: 'string',
      image: 'string',
      reserved: false,
    },
    {
      id: 2,
      name: 'Tesla',
      type: 'Falcon 2',
      description: 'string',
      image: 'string',
      reserved: true,
    },
    {
      id: 3,
      name: 'Tesla',
      type: 'Falcon 3',
      description: 'string',
      image: 'string',
      reserved: true,
    },
    ];

    const newState = rocketReducer([], {
      type: {
        id: 3,
        name: 'Tesla',
        type: 'Falcon 3',
        description: 'string',
        image: 'string',
        reserved: true,
      },
      payLoad: post,
    });
    expect(newState).not.toEqual(post);
  });

  it('It should return content from the API', () => {
    const API = getRocketAPI();
    expect(API).not.toEqual(null);
  });
});
