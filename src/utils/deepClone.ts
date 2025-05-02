const deepClone = (obj) => {
  if (!obj || typeof obj !== "object") {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj);
  }

  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }

  if (obj instanceof Set) {
    return new Set([...obj]);
  }

  if (obj instanceof Map) {
    return new Map([...obj]);
  }

  const cloneObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key]);
    }
  }

  for (let skey of Object.getOwnPropertySymbols(obj)) {
    cloneObj[skey] = obj[skey];
  }

  return cloneObj;
};
