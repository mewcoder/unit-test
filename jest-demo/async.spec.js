

const fetchUser = () => Promise.resolve({
  name: 'John',
  age: 30
})

it('test promise', () => {
  fetchUser().then(user => {
    expect(user.name).toBe('John');
    expect(user.age).toBe(30);
  })
})



it('test async', async () => {
  const user = await fetchUser();
  expect(user.name).toBe('John');
  expect(user.age).toBe(30);
})


it('test expect', () => {
  return expect(fetchUser()).resolves.toEqual({
    name: 'John',
    age: 30
  })
})