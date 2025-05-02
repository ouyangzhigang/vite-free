Function.prototype.mycall = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error("Not a function");
  }

  context = context || window;
  const uniqkey = Symbol();
  context[uniqkey] = this;
  const result = context[uniqkey](...args);
  delete context[uniqkey];
  return result;
};

Function.prototype.myapply = function (context, args) {
  if (typeof this !== "function") {
    throw new Error("Not a function");
  }

  context = context || window;
  const uniqkey = Symbol();
  context[uniqkey] = this;
  const result = context[uniqkey](...args);
  delete context[uniqkey];
  return result;
};

Function.prototype.mybind = function (context, args) {
  const self = this;
  return function (...nextArgs) {
    self.apply(context, args.concat(nextArgs));
  };
};
