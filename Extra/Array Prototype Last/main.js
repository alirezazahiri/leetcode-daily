Array.prototype.last = function () {
  const SIZE = this.length;
  return SIZE == 0 ? -1 : this[SIZE - 1];
};

const arr = [];
console.log(arr.last()); // 3
