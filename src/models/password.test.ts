import { describe, it, expect } from "vitest";
import { Password } from "./password";

describe("Password", () => {
  it("should not less than 6 characters", () => {
    const password = new Password("sh0rt");
    expect(password.isValid).toBeFalsy();
  });

  it("should not only alphabets", () => {
    const password = new Password("shortpassword");
    expect(password.isValid).toBeFalsy();
  });

  it("should ont only digits", () => {
    const password = new Password("1234567890");
    expect(password.isValid).toBeFalsy();
  });

  it("should pass", () => {
    const password = new Password("longpassw0rd");
    expect(password.isValid).toBeTruthy();
  });
});
