function selectionSort(arr, compare = defaultCompare) {
  const { length } = arr;
  let minIndex;
  for (let i = 0; i < length - 1; i++) {
    minIndex = i;
    for (let j = i; j < length; j++) {
      if (compare(arr[minIndex], arr[j]) === Compare.BIGGER_THAN) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      swap(arr, i, minIndex);
    }
  }
  return arr;
}
function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
};

function defaultCompare(a, b) {
  if (a === b) {
    return 0;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}
