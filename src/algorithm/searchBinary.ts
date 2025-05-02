export function searchBinary(list, target) {
  let left = 0;
  let right = list.length - 1;

  while (left <= right) {
    const mid = ~~((left + right) / 2);
    const value = list[mid];

    if (value === target) {
      return mid;
    } else {
      if (value < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}
