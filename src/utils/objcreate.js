function objcreate(proto) {
  if (typeof proto !== "object" && proto !== null) {
    throw new Error("not object prototype");
  }

  function F() {}
  F.prototype = proto;
  return new F();
}
