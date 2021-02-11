const buildCharMap = (str) => {
    const mp = {};
    for (const char of str) {
      if (mp[char]) {
        mp[char] = mp[char] + 1;
      } else {
        mp[char] = 1;
      }
    }
  
    return mp;
  };
  
function makeAnagram(a, b) {
    const charmapA = buildCharMap(a);
    const charmapB = buildCharMap(b);
    let removeChars = 0;
  
    const charmapAKeys = Object.keys(charmapA);
    const charmapBKeys = Object.keys(charmapB);
  
    for (const ch of charmapAKeys) {
      if (charmapBKeys.includes(ch)) {
        removeChars += Math.abs(charmapA[ch] - charmapB[ch]);
      } else {
        removeChars += charmapA[ch];
      }
    }
  
    for (const ch of charmapBKeys) {
      if (!charmapAKeys.includes(ch)) {
        removeChars += charmapB[ch];
      }
    }
  
    return removeChars;
  }
  
  
  console.log(makeAnagram("ffccggguu9", "fffcccgupp"));
  