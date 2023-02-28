export function shuffle(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return [];
  }
  return [...array].sort(() => Math.random() - 0.5);
}
