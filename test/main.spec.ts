describe('main', () => {
  test('hello world', () => {
    expect(1).toBe(1);
    expect(1).not.toBe(2);
    expect(1).not.toBeTruthy();
  });
  test('mock fail', () => {
    const mock = jest.fn();
    mock();
    expect(mock).toHaveBeenCalled();
  });
});
