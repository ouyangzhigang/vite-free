export const isEqual = (obj1: any, obj2: any) => {
  if (!(obj1 && obj2) || typeof obj1 !== "object" || typeof obj2 !== "object") {
    return obj1 === obj2;
  }

  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (const key in obj1) {
    const res = isEqual(obj1[key], obj2[key]);
    if (!res) return false;
  }

  return true;
};

console.log(1);
console.log(isEqual);
