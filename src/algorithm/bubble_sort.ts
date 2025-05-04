export function bubbleSort(arr: number[]): number[] {
  const len = arr.length;

  for (let i = len - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

const res = bubbleSort([5, 4, 3, 2, 1]);
console.log(res); // [1, 2, 3, 4, 5]