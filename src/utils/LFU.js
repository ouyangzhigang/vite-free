class LFU {
  constructor(max = 1000) {
      this.max = max
      this.caches = new Map()
      this.minKey = []
  }
  
  get(key) {
      const {value, freq} = this.caches.get(key)
      this.caches.set(key, {value, freq: freq += 1})
      return value;
  }

  updateMinKey() {
      this.minKey = []
      const min = Math.min(this, this.caches.values().freq)
      for (let [key, value] of this.caches.entries()) {
          if (this.caches.get(key) === min) {
              this.minKey.push(key)
          }
      }
  }

  put(key, value) {
      if (this.caches.has(key)) {
          const {freq} = this.caches.get(key)
          this.caches.delete(key)
          this.caches.set(key, {value, freq})
      } else {
          if (this.caches.size === this.max) {
              this.caches.keys().forEach(key => {
                  if (minKey.includes(key)) {
                      this.caches.delete(key)
                  }
              })
          }

          this.caches.set(key, { value, freq: 0 }
      }
  }
}