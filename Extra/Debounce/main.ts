type F = (...p: any[]) => any;

function debounce(fn: F, t: number): F {
  let ref: ReturnType<typeof setTimeout> | null = null;
  return function (...args) {
    if (ref) clearTimeout(ref);
    ref = setTimeout(() => {
      fn(...args);
    }, t);
  };
}

const log = debounce(console.log, 100);
log("Hello"); // cancelled
log("Hello"); // cancelled
log("Hello"); // Logged at t=100ms
