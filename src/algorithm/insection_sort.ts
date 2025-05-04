export function insertionSort(arr: number[]): number[] {
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    const current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }

  return arr;
}

const res = insertionSort([5, 4, 3, 2, 1]);
console.log(res); // [1, 2, 3, 4, 5]