// URL: https://leetcode.com/problems/simplify-path/

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    const simplifiedPath = [];
    const dirs = path.split("/");

    for (const dir of dirs) {
        if (dir === "" || dir === ".") continue;
        dir === ".." ? simplifiedPath.pop() : simplifiedPath.push(dir);
    }

    return "/" + simplifiedPath.join("/");
};

console.log(simplifyPath("/home//foo/"));
console.log(simplifyPath("/../"));