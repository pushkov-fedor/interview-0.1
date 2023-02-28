import { getWeirdNumberIndex } from "./task";
import { runForImplemented } from "./.helpers";

const tests = () => {
  it("should return index of odd if others are even", () => {
    expect(getWeirdNumberIndex("1 2 4 6 8 10 -20 -2000")).toBe(0); // 1
    expect(getWeirdNumberIndex("8 88 888 8888 81 888 88 8")).toBe(4); // 81
    expect(getWeirdNumberIndex("10 100 1000 10000 1 1000000")).toBe(4); // 1
  });

  it("should return index of even if others are odd", () => {
    expect(getWeirdNumberIndex("1 3 5 55 99 11 40 67")).toBe(6); // 40
    expect(getWeirdNumberIndex("-3 -7 -11 9 111 4")).toBe(5); // 4
    expect(getWeirdNumberIndex("11 111 1111 1010 1")).toBe(3); // 1010
  });

  it("should return `undefined` in case of the absence of a clear solution", () => {
    expect(getWeirdNumberIndex("1")).toBe(undefined);
    expect(getWeirdNumberIndex("222")).toBe(undefined);
    expect(getWeirdNumberIndex("1 2")).toBe(undefined);
    expect(getWeirdNumberIndex("10 11 12 13 14 15 16")).toBe(undefined);
    expect(getWeirdNumberIndex("10 12 14 16")).toBe(undefined);
    expect(getWeirdNumberIndex("1 3 5 7")).toBe(undefined);
    expect(getWeirdNumberIndex("10 11 13 14")).toBe(undefined);
  });

  it("should return `undefined` in case of invalid input", () => {
    expect(getWeirdNumberIndex("NaN 7 10 12 55")).toBe(undefined);
    expect(getWeirdNumberIndex("1 2 444 true")).toBe(undefined);
    expect(getWeirdNumberIndex("aa a aa")).toBe(undefined);
    expect(getWeirdNumberIndex("true false true")).toBe(undefined);
    expect(getWeirdNumberIndex(undefined)).toBe(undefined);
    expect(getWeirdNumberIndex(NaN)).toBe(undefined);
    expect(getWeirdNumberIndex(Infinity)).toBe(undefined);
    expect(getWeirdNumberIndex([])).toBe(undefined);
    expect(getWeirdNumberIndex({})).toBe(undefined);
    expect(getWeirdNumberIndex()).toBe(undefined);
  });
};

runForImplemented(getWeirdNumberIndex, tests);
