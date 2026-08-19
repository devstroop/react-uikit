import { describe, expect, it } from "vitest";
import { email, maxLength, minLength, pattern, range, required, runValidators } from "./index";

describe("required", () => {
  it("fails empty values", () => {
    expect(required()("")).toBe("Required");
    expect(required()(undefined)).toBe("Required");
    expect(required()(null)).toBe("Required");
    expect(required()("   ")).toBe("Required");
  });

  it("passes non-empty values", () => {
    expect(required()("x")).toBeNull();
    expect(required()(0)).toBeNull();
    expect(required()(false)).toBeNull();
  });

  it("accepts a custom message", () => {
    expect(required("Name is required")("")).toBe("Name is required");
  });
});

describe("email", () => {
  it("accepts valid addresses", () => {
    expect(email()("a@b.c")).toBeNull();
    expect(email()("user+tag@example.co.uk")).toBeNull();
  });

  it("rejects invalid addresses", () => {
    expect(email()("nope")).toBe("Invalid email");
    expect(email()("a@b")).toBe("Invalid email");
    expect(email()("a b@c.d")).toBe("Invalid email");
  });

  it("passes empty values", () => {
    expect(email()("")).toBeNull();
    expect(email()(undefined)).toBeNull();
  });
});

describe("pattern", () => {
  it("matches and rejects against the regexp", () => {
    const zip = pattern(/^\d{5}$/, "5 digits");
    expect(zip("12345")).toBeNull();
    expect(zip("12")).toBe("5 digits");
    expect(zip("abcde")).toBe("5 digits");
  });

  it("passes empty values", () => {
    expect(pattern(/^\d+$/)("")).toBeNull();
  });
});

describe("minLength / maxLength", () => {
  it("checks minimum length", () => {
    expect(minLength(3)("ab")).toBe("Minimum 3 characters");
    expect(minLength(3)("abc")).toBeNull();
  });

  it("checks maximum length", () => {
    expect(maxLength(3)("abcd")).toBe("Maximum 3 characters");
    expect(maxLength(3)("abc")).toBeNull();
  });

  it("passes empty values", () => {
    expect(minLength(3)("")).toBeNull();
    expect(maxLength(3)(null)).toBeNull();
  });
});

describe("range", () => {
  it("accepts values inside the bounds", () => {
    expect(range(1, 10)("5")).toBeNull();
    expect(range(1, 10)("1")).toBeNull();
    expect(range(1, 10)("10")).toBeNull();
  });

  it("rejects values outside the bounds", () => {
    expect(range(1, 10)("0")).toBe("Between 1 and 10");
    expect(range(1, 10)("11")).toBe("Between 1 and 10");
    expect(range(1, 10)("abc")).toBe("Between 1 and 10");
  });

  it("passes empty values", () => {
    expect(range(1, 10)("")).toBeNull();
  });
});

describe("runValidators", () => {
  it("collects messages from failing validators", () => {
    const messages = runValidators([required("Required"), email("Invalid email")], "nope");
    expect(messages).toEqual(["Invalid email"]);
  });

  it("returns an empty list when everything passes", () => {
    expect(runValidators([required(), email()], "a@b.c")).toEqual([]);
  });

  it("passes the model to custom validators", () => {
    const custom = (value: unknown, model?: unknown) =>
      value === (model as Record<string, unknown>).match ? null : "No match";
    expect(runValidators([custom], "x", { match: "x" })).toEqual([]);
    expect(runValidators([custom], "y", { match: "x" })).toEqual(["No match"]);
  });
});