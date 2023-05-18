// URL: https://leetcode.com/problems/cache-with-time-limit/

class TimeLimitedCache {
  constructor() {
    this.Cache = new Map();
  }
  /**
   * @param {number} key
   * @param {number} value
   * @param {number} time until expiration in ms
   * @return {boolean} if un-expired key already existed
   */
  set(key, value, duration) {
    let res = false;
    if (this.Cache.has(key)) {
      const ref = this.Cache.get(key).ref;
      clearTimeout(ref);
      res = true;
    }
    const ref = setTimeout(() => {
      this.Cache.delete(key);
    }, duration);
    this.Cache.set(key, {
      value: value,
      ref: ref,
    });
    return res;
  }
  /**
   * @param {number} key
   * @return {number} value associated with key
   */
  get(key) {
    if (this.Cache.has(key)) {
      return this.Cache.get(key).value;
    }
    return -1;
  }
  /**
   * @return {number} count of non-expired keys
   */
  count() {
    return this.Cache.size;
  }
}

var obj = new TimeLimitedCache();
console.log(obj.set(1, 42, 2500)); // false
console.log(obj.get(1)); // 42
console.log(obj.count()); // 1
