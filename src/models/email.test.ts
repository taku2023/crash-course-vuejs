import { describe, it, expect } from "vitest";
import { EmailAddress } from "./email";

describe("Email", () => {
  it("should not contains character #", () => {
    const email = new EmailAddress("invalid#email@gmail.com");
    expect(email.isValid).toBeFalsy();
  });

  it("should include character @", () => {
    const email = new EmailAddress("invaligmail.com");
    expect(email.isValid).toBeFalsy();
  });

  it("should valid", () => {
    const email = new EmailAddress("valid@gmail.com");
    expect(email.isValid).toBeTruthy();
  });
});
