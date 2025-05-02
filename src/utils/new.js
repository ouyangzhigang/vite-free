function mynew(constructor, ...args) {
  const obj = Object.create(constructor.prototype);
  const result = constructor.apply(...args);
  return result instanceof Object ? result : obj;
}
