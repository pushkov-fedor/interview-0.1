import { isNotImplemented } from "./is-not-implemented.helper";

/**
 * @param {Function} targetFunction
 * @param {Function} rawTestsFactory
 * */
export function runForImplemented(targetFunction, rawTestsFactory) {
  const { name } = targetFunction;

  const shouldNotRunTests =
    targetFunction === undefined || isNotImplemented(targetFunction);
  const skipTestsFactory = () => {
    it("should pass unimplemented tasks", () => {});
  };

  if (shouldNotRunTests) {
    describe(`${name} (unimplemented)`, skipTestsFactory);
    return;
  }

  describe(name, rawTestsFactory);
}
