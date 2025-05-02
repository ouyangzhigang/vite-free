function curry(fn) {
  return function curries(...args) {
    if (args.length >= fn.length) {
      // @ts-ignore
      fn.apply(this, args);
    } else {
      return function (...nextArgs) {
        // @ts-ignore
        return curries.apply(this, [...args, ...nextArgs]);
      };
    }
  };
}
