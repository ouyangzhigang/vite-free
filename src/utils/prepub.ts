class Prepub {
  subs = {};
  constructor() {}

  subcribe(name, fn) {
    if (!this.subs[name]) {
      this.subs[name] = [];
    }

    this.subs[name].push(fn);
  }

  unsubcribe(name, fn) {
    if (!this.subs[name]) {
      return;
    }

    this.subs[name] = this.subs[name].filter((subcribe) => subcribe !== fn);
  }

  publish(name, message) {
    if (!this.subs[name]) {
      return;
    }

    this.subs[name].forEach((sub) => {
      sub(message);
    });
  }
}
