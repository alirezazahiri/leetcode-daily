// URL: https://leetcode.com/problems/flood-fill/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = (image, sr, sc, newColor) => {
    const oldColor = image[sr][sc];
    if(oldColor !== newColor) rePaint(image, sr, sc, oldColor, newColor);
    return image;
};

const rePaint = (image, sr, sc, oldColor, newColor) => {
    // Make sure we are inside the grid
    const NotInsideTheGridAnyMore = sr < 0 || sr >= image.length || sc < 0 || sc >= image[sr].length;
    if(NotInsideTheGridAnyMore) {
            return;
    }
    
    // Encountered a color boundry
    if(image[sr][sc] !== oldColor) {
        return;
    }
    
    // Update color
    image[sr][sc] = newColor;
    
    // Check all 4 sides of the given pixel
    rePaint(image, sr + 1, sc, oldColor, newColor);
    rePaint(image, sr - 1, sc, oldColor, newColor);
    rePaint(image, sr, sc + 1, oldColor, newColor);
    rePaint(image, sr, sc - 1, oldColor, newColor);
}

let img1 = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];
console.log(floodFill(img1, 1, 1, 2));

let img2 = [
  [0, 0, 0],
  [0, 0, 0],
];
console.log(floodFill(img2, 0, 0, 0));
