// URL: https://leetcode.com/problems/jump-game-iv/

class JsQueue {
    constructor() {
        this.q = new Set();
        this.it = this.q.values();
    }
    add(item) {
        this.q.add(item);
    }
    remove() {
        const item = this.it.next().value;
        this.q.delete(item);
        return item;
    }
    size() {
        return this.q.size;
    }
}

/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
    const map = new Map();
    for(let i = 0;i<arr.length;i++) {
        map.has(arr[i]) ?  map.get(arr[i]).push(i) : map.set(arr[i], [i])
    }
    let queue  = new JsQueue();
    queue.add({ n:0,val:arr[0],steps:0});
    arr[0] = '*';
    while (queue.size) {
        const {n,val, steps} = queue.remove();
        
        if (n == arr.length-1) {
            return steps;
        }

        if (n-1 > 0 && arr[n-1] != '*') {
            queue.add({n:n-1, val:arr[n-1], steps:steps+1});
        }
         if (n+1 < arr.length && arr[n+1] != '*') {
            queue.add({n:n+1, val:arr[n+1], steps:steps+1});
        }
        const paths = map.get(val)? map.get(val): [];
        for(const path of paths) {
            if (arr[path] != '*' ) {
                queue.add({n:path, val:arr[path], steps:steps+1});
                arr[path] = '*';
            }
        }

        if (map.has(val)) {
            map.delete(val);
        }
    }

    return 0;
};