var func = function (arr) {
    arr.sort((a, b) => a-b);
    let prev = null;
    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i] - arr[i-1];
        if (prev !== null) 
            if (prev !== curr) 
                return false;
        prev = curr;
    }
    return true;
}

console.log(func([1, 5, 3]))
console.log(func([1, 2, 4]))