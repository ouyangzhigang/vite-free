class LRU {
  constructor(max = 1000) {
    this.max = max;
    this.cache = new Map();
  }

  get(key) {
    return this.cache.get(key);
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
      this.cache.set(key, value);
    } else {
      if (this.cache.size === this.max) {
        this.cache.delete(this.cache.keys().next().value);
      }
      this.cache.set(key, value);
    }
  }
}
