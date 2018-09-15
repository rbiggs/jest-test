import { uuid } from "../src"

test("uuid should create a string.", function () {
  const id = uuid()
  expect(typeof id).toBe('string')
})

test("uuid should have 36 characters.", () => {
  const id = uuid()
  expect(id.length).toEqual(36)
})
