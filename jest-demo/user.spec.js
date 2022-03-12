import User from "./user";
test("should change name ", () => {
  // given
  const user = new User("tom");

  // when
  user.setName("bob");

  // then
  expect(user.getName()).toBe("bob");
});
