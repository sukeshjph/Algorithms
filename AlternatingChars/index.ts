export function alternatingCharacters(s) {
  let i = 0;
  let j = 1;
  let count = 0;

  while (j <= s.length - 1) {
    if (s[i] === s[j]) {
      count++;
    }
    i++;
    j++;
  }

  return count;
}

console.log(alternatingCharacters("AAABBB"));
