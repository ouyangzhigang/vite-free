function addfly1(target) {
  console.log("addfly1");
  target.prototype.isfly = true;
}

function addfly2() {
  console.log("addfly2");
  return function (target) {
    console.log("addfly2 return");
    target.prototype.fly = function () {
      console.log("fly");
    };
  };
}

function addfly3(hobby = "running") {
  console.log("addfly3");
  return function (target) {
    console.log("addfly3 return");
    target.prototype.hobby = hobby;
  };
}

@addfly1
@addfly2()
@addfly3("swim")
class Man {
  name = "cc";
  workExperience = 0;
  constructor(name = "unknown", workExperience = 3) {
    this.init(name, workExperience);
  }
  init(name, workExperience) {
    this.name = name;
    this.workExperience = workExperience;
  }
}

// const man = new Man();

// 类装饰器，重载构造
function classDecorator(target) {
  console.log("classDecorator");
  return class extends target {
    constructor(...args) {
      super(...args);
      this.name = "cc";
      this.workExperience = 0;
    }
  };
}

// 方法装饰器
function methodDecorator(target, key, descriptor) {
  console.log("methodDecorator");
  const oldValue = descriptor.value;
  descriptor.value = function (...args) {
    console.log("methodDecorator run");
    return oldValue.apply(this, args);
  };

  return descriptor;
}
function methodDecorator2(target, key, descriptor) {
  console.log("methodDecorator2");
  descriptor.writable = false;
  return descriptor;
}

// 访问器装饰器
function accessorDecorator(target, key, descriptor) {
  console.log("accessorDecorator");
  const oldValue = descriptor.get;
  descriptor.get = function () {
    console.log("accessorDecorator run");
    const res = oldValue.call(this);
    if (res > 100) {
      return res;
    }
    return;
  };
}
function accessorDecorator2(target, key, descriptor) {
  console.log("accessorDecorator2");
  descriptor.set = function (value) {
    console.log("accessorDecorator2 run");
    this._age = value;
  };
}

// 属性装饰器
function propertyDecorator(target, key) {
  console.log("propertyDecorator");
  let value = target[key];
  const getter = () => {
    console.log("propertyDecorator run");
    return value;
  };
  const setter = (newValue) => {
    console.log("propertyDecorator set");
    value = newValue;
  };
  Object.defineProperty(target, key, {
    get: getter,
    set: setter,
  });
}
function propertyDecorator2(target, key) {
  console.log("propertyDecorator2");
  Object.defineProperty(target, key, {
    writable: false,
  });
}

class Person {
  @propertyDecorator2
  name;

  getName() {
    console.log("getName");
    return this.name;
  }
}

// 装饰器模式-aop实现
Function.prototype["after"] = function (fn) {
  const _self = this;
  return function (...args) {
    const ctx = this;
    const res = _self.apply(ctx, args);
    fn.apply(ctx, args);
    return res;
  };
};

function log() {
  console.log("log");
}

function login() {
  console.log("login");
}

login.after(log);

// 基于装饰器优雅的捕获异常
function catchError(target, key, descriptor) {
  const oldValue = descriptor.value;
  descriptor.value = function (...args) {
    try {
      return oldValue.apply(this, args);
    } catch (error) {
      console.log("catchError run");
      console.log(error);
    }
  };
  return descriptor;
}

class UserApi {
  @catchError({
    message: "getUser error",
    toast: true,
    report: true,
    log: true,
  })
  getUser() {
    console.log("getUser");
    throw new Error("error");
  }
}

class UserApi2 extends Error {
  __type__ = "__catchError__";

  constructor(message, options = {}) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
    this.options = options;
  }
}
