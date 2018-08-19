import {
  isDefined,
  isNotNull,
  isNotNullorUnDefined,
  isNull,
  isNullOrUndefined,
  isUndefined,
  orElse,
  orElseThrow,
 } from "../src/";

describe("nullable", () => {
  describe("isNull", () => {
    it("returns true when a null value is provided", () => {
      expect(isNull(null)).toEqual(true);
    });

    it("returns false when an undefined value is provided", () => {
      expect(isNull(undefined)).toEqual(false);
    });

    it("returns false when a non-null value is provided", () => {
      expect(isNull("foo")).toEqual(false);
    });
  });

  describe("isNotNull", () => {
    it("returns false when a null value is provided", () => {
      expect(isNotNull(null)).toEqual(false);
    });

    it("returns true when an undefined value is provided", () => {
      expect(isNotNull(undefined)).toEqual(true);
    });

    it("returns true when a non-null value is provided", () => {
      expect(isNotNull("foo")).toEqual(true);
    });
  });

  describe("isNullOrUndefined", () => {
    it("returns true for null", () => {
      expect(isNullOrUndefined(null)).toEqual(true);
    });

    it("returns true for undefined", () => {
      expect(isNullOrUndefined(undefined)).toEqual(true);
    });

    it("returns false for a defined value", () => {
      expect(isNullOrUndefined("foo")).toEqual(false);
    });
  });

  describe("isNotNullOrUndefined", () => {
    it("returns false for null", () => {
      expect(isNotNullorUnDefined(null)).toEqual(false);
    });

    it("returns false for undefined", () => {
      expect(isNotNullorUnDefined(undefined)).toEqual(false);
    });

    it("returns true for a defined value", () => {
      expect(isNotNullorUnDefined("foo")).toEqual(true);
    });
  });

  describe("isUndefined", () => {
    it("returns true when value is undefined", () => {
      expect(isUndefined(undefined)).toEqual(true);
    });

    it("returns false when value is defined", () => {
      expect(isUndefined("foo")).toEqual(false);
    });

    it("returns true when value is null", () => {
      expect(isUndefined(null)).toEqual(false);
    });
  });

  describe("isDefined", () => {
    it("returns false when value is undefined", () => {
      expect(isDefined(undefined)).toEqual(false);
    });

    it("returns true when value is defined", () => {
      expect(isDefined("foo")).toEqual(true);
    });

    it("returns true when value is null", () => {
      expect(isDefined(null)).toEqual(true);
    });
  });

  describe("orElseThrow", () => {
    it("throws an error if provided with a null value", () => {
      try {
        orElseThrow(null, new Error("bad!"));
        expect(true).toBeFalsy();
      } catch (err) {
        expect(err.message).toEqual("bad!");
      }
    });

    it("returns a value if the provided value is not null", () => {
      try {
        const result = orElseThrow("test", new Error("bad!"));
        expect(result).toEqual("test");
      } catch (err) {
        expect(true).toBeFalsy();
      }
    });
  });

  describe("orElse", () => {
    it("returns the default if value is null", () => {
      expect(orElse<string>(null, "bar")).toEqual("bar");
    });

    it("returns the value if it is not null", () => {
      expect(orElse<string>("foo", "bar")).toEqual("foo");
    });
  });
});
