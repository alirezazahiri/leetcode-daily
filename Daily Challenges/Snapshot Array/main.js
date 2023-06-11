// URL: https://leetcode.com/problems/snapshot-array/

/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
    this.snapId = 0;
    this.snapShots = {};
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    if(this.snapShots[this.snapId]) 
        this.snapShots[this.snapId][index] = val;
    else {
        this.snapShots[this.snapId] = [];
        this.snapShots[this.snapId][index] = val;
    }
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    const snapId = this.snapId;
    this.snapId++;
    return snapId;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    for(let  i = snap_id; i >= 0; i--) 
        if(this.snapShots[i] && this.snapShots[i][index] !== undefined) return this.snapShots[i][index];
    return 0
};
/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */

// let snapshotArr = new SnapshotArray(4); // set the length to be 3
// console.log(snapshotArr.snap());  // Take a snapshot, return snap_id = 0
// console.log(snapshotArr.snap());  // Take a snapshot, return snap_id = 1
// console.log(snapshotArr.get(3, 1));
// console.log(snapshotArr.set(2, 4));  // Set array[0] = 5
// console.log(snapshotArr.snap());  // Take a snapshot, return snap_id = 1
// console.log(snapshotArr.set(1, 4));  // Set array[0] = 5

let snapshotArr = new SnapshotArray(1); // set the length to be 1
console.log(null);
console.log(snapshotArr.snap()); // Take a snapshot, return snap_id = 0
console.log(snapshotArr.snap()); // Take a snapshot, return snap_id = 1
console.log(snapshotArr.set(0, 4)); // Set array[0] = 15
// console.log(snapshotArr.snapshots);
console.log(snapshotArr.snap()); // Take a snapshot, return snap_id = 2
console.log(snapshotArr.get(0, 1)); // Get the value of array[0] with snap_id = 0, return 5
console.log(snapshotArr.set(0, 12)); // Set array[0] = 15
// console.log(snapshotArr.snapshots);
console.log(snapshotArr.get(0, 1)); // Get the value of array[0] with snap_id = 0, return 5
console.log(snapshotArr.snap()); // Take a snapshot, return snap_id = 3
console.log(snapshotArr.snapshots);
console.log(snapshotArr.get(0, 3)); // Get the value of array[0] with snap_id = 0, return 15
