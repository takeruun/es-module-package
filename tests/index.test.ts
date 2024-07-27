import { helloWorld } from "../src";

describe("helloWorld", () => {
  it("should return 'Hello, world!'", () => {
    expect(helloWorld()).toBe("Hello, world!");
  });
});
