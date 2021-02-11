function rotLeft(a, d) {
  const removedItems = a.splice(0, d);
  return [...a, ...removedItems];
}
