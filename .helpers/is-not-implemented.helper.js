export function isNotImplemented(targetFunction) {
  let functionIsNotImplemented = false;

  try {
    targetFunction();
  } catch (error) {
    functionIsNotImplemented =
      error instanceof Error && error.message === "Not implemented";
  }

  return functionIsNotImplemented;
}
