function curry(fn: Function): Function {
  return function curried(...args: any[]) {
    if (args.length === fn.length) return fn(...args);

    return function (...otherArgs: any[]) { // gathers all the other arguments passed to this function and unifies them 
      return curried(...args, ...otherArgs);
    };
  };
}
