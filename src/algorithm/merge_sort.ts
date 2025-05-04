export function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }
  const len = arr.length;
  const mid = ~~(len / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  let leftIndex = 0;
  let rightIndex = 0;
  const result: number[] = [];
  const leftLen = left.length;
  const rightLen = right.length;

  while (leftIndex < leftLen && rightIndex < rightLen) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  while (leftIndex < leftLen) {
    result.push(left[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < rightLen) {
    result.push(right[rightIndex]);
    rightIndex++;
  }
  return result;
}

const res = mergeSort([5, 4, 3, 2, 1]);
console.log(res); // [1, 2, 3, 4, 5]