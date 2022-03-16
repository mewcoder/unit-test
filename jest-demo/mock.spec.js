function mockTest(shouldCall, cb) {
  if (shouldCall) {
    cb(11)
  }
}

it('test mock fn', () => {
  const mockCb = jest.fn()
  mockTest(true, mockCb)
  expect(mockCb).toHaveBeenCalled()
  expect(mockCb).toHaveBeenCalledWith(11)
  expect(mockCb).toHaveBeenCalledTimes(1)
})


it('test mock fn', () => {
  const mockCb = jest.fn(x => x + 1)
  mockTest(true, mockCb)
  console.log(mockCb.mock.calls)
  console.log(mockCb.mock.results)
})