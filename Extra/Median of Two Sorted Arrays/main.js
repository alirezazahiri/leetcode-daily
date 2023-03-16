// URL: https://leetcode.com/problems/median-of-two-sorted-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays1 = function (nums1, nums2) {
  let mergedList = mergeSortedArrays(nums1, nums2);
  let mid = Math.floor(mergedList.length / 2);
  return (
    mergedList.length % 2
      ? mergedList[mid]
      : (mergedList[mid - 1] + mergedList[mid]) / 2
  ).toFixed(5);
};

function mergeSortedArrays(arr1, arr2) {
  let i = 0,
    j = 0,
    mergedArray = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

var findMedianSortedArrays2 = function (nums1, nums2) {
  let mergedNums = mergeSort(nums1, nums2);

  return (
    mergedNums.length % 2
      ? mergedNums[Math.floor(mergedNums.length / 2)]
      : (mergedNums[mergedNums.length / 2] +
          mergedNums[mergedNums.length / 2 - 1]) /
        2
  ).toFixed(5);
};

function mergeSort(arr1, arr2) {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  let mergedArray = [];

  mergedArray =
    arr1[0] < arr2[0]
      ? [...mergedArray, arr1[0], ...mergeSort(arr1.slice(1), arr2)]
      : [...mergedArray, arr2[0], ...mergeSort(arr1, arr2.slice(1))];

  return mergedArray;
}

const findMedianSortedArrays = (nums1, nums2, sol = 1) => {
  return sol == 1
    ? findMedianSortedArrays1(nums1, nums2)
    : findMedianSortedArrays2(nums1, nums2);
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([4, 5, 6], [2, 3, 4]));
