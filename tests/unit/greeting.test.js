const { getGreeting } = require("../../src/greeting");

describe("getGreeting", () => {
  it("returns the hello world message", () => {
    expect(getGreeting()).toBe("Hello world!");
  });

  it("returns the hello world message with a name", () => {

    expect(getGreeting("Alice")).toBe("Hello world! From Alice");

  });

  it("returns the hello world message with an empty name", () => {

    expect(getGreeting("")).toBe("Hello world!");

  });



  it("returns the hello world message with a number", () => {

    expect(getGreeting(123)).toBe("Hello world!");

  });



  it("returns the hello world message with null", () => {

    expect(getGreeting(null)).toBe("Hello world!");

  });



  it("returns the hello world message with special characters", () => {

    expect(getGreeting("Alice & Bob")).toBe("Hello world! From Alice & Bob");

  });



  it("returns the hello world message with an object", () => {

    expect(getGreeting({ name: "Alice" })).toBe("Hello world!");

  });
});
