

test('should return initial state', () => {
  expect(
    reducer(undefined, {
      type: undefined,
    }),
  ).toEqual(initialState);
});
