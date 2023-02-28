/**
 * @description
 * Необходимо найти число, отличное от прочих по четности и вернуть его индекс.
 * В случае отсутствия однозначного решения, вернуть undefined.
 *
 * @example
 * 1 2 4 8 >>> 0
 * 3 4 5 9 >>> 1
 *
 * odd – нечетный
 * even – четный
 */

export function getWeirdNumberIndex(input) {
  if (!input || typeof input !== "string") {
    return undefined;
  }

  let array = input.split(" ");

  if (array.length <= 1) {
    return undefined;
  }

  let oddCounter = 0;
  let evenCounter = 0;

  let oddIndex = -1;
  let evenIndex = -1;

  for (let i = 0; i < array.length; i++) {
    if (typeof parseInt(array[i]) !== "number") {
      return undefined;
    }

    if (array[i] % 2 === 0) {
      evenIndex = i;
      evenCounter++;
    } else {
      oddIndex = i;
      oddCounter++;
    }
  }

  if (evenCounter === oddCounter || evenCounter === 0 || oddCounter === 0) {
    return undefined;
  }

  if (oddCounter === 1) {
    return oddIndex;
  }

  if (evenCounter === 1) {
    return evenIndex;
  }

  return undefined;
}
