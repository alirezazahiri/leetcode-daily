// URL: https://leetcode.com/problems/event-emitter/

class EventEmitter {
  constructor() {
    this.events = new Map();
  }
  
  subscribe(event, cb) {
    if (!this.events.has(event)) this.events.set(event, []);

    const subscribers = this.events.get(event);

    const unsubscribe = () => {
      const index = subscribers.indexOf(cb);
      if (index !== -1) subscribers.splice(index, 1);
    };

    subscribers.push(cb);

    return {
      unsubscribe,
    };
  }

  emit(event, args = []) {
    const subscribers = this.events.get(event);

    if (!subscribers) return [];

    const results = [];

    for (const callback of subscribers) results.push(callback(...args));

    return results;
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
