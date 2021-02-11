const BinarySearch = (sortedArr, ele) => {
  let left = 0;
  let right = sortedArr.length - 1;
  let middle = Math.ceil((left + right) / 2);

  for (let index = 0; index < sortedArr.length && left<=right; index++) {
    if (ele === sortedArr[middle]) {
      return middle;
    } else if (ele < sortedArr[middle]) {
      right = middle;
      middle = Math.ceil(left + right / 2);
    } else {
      left = middle;
      middle = Math.ceil((left + right) / 2);
    }
  }
};

const BinarySearch2 = (sortedArr, ele) => {
  let left = 0;
  let right = sortedArr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (ele !== sortedArr[middle] && left<=right) {
    if (ele < sortedArr[middle]) right = middle - 1;
    else left = middle + 1;
    middle = Math.floor((left + right) / 2);
  }

  return sortedArr[middle] === ele ? middle : -1
};

// console.log(BinarySearch([1, 2, 3, 7, 8, 56, 78, 99, 678], 78));
console.log(BinarySearch2([1, 2, 3, 7, 8, 56, 78, 99, 678], 78));