import { add } from "./add";


test("should equal 2 when add(1,1)", () => {
  const res = add(1, 1);
  expect(res).toBe(2);
});
