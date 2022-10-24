let countingSort = (arr, min, max) => {
  let i = min,
    j = 0,
    len = arr.length,
    count = [];
  for (i; i <= max; i++) {
    count[i] = 0;
  }
  for (i = 0; i < len; i++) {
    count[arr[i]] += 1;
  }
  for (i = min; i <= max; i++) {
    while (count[i] > 0) {
      arr[j] = i;
      j++;
      count[i]--;
    }
  }
  return arr;
};

//use reduce
function countingSort(arr) {
  return arr
    .reduce((acc, v) => ((acc[v] = (acc[v] || 0) + 1), acc), [])
    .reduce((acc, n, i) => acc.concat(Array(n).fill(i)), []);
}
