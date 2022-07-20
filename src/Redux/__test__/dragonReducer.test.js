import reducer, { initialState } from '../DragonsReducerSlice';

test('should return initial state', () => {
  expect(
    reducer(undefined, {
      type: undefined,
    })
  ).toEqual(initialState);
});