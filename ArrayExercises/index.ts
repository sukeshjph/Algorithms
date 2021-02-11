/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  return arr.some((elm, index, orgArr) => {
    return (
      orgArr.findIndex(
        (otherEl, i) =>
          i !== index && (otherEl === 2 * elm || otherEl === elm / 2)
      ) !== -1
    );
  });
};

console.log(checkIfExist([-2,0,10,-19,4,6,-8])) // O(n2)
