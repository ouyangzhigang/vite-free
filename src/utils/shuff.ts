export const shuff = (array: number[]) => {
  if (!array.length) return [];

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

console.log(shuff([1, 2, 3, 4, 5, 6, 7, 8, 9, 9]));
