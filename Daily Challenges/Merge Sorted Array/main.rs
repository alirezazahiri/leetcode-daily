fn merge(nums1: &mut Vec<i32>, m: i32, nums2: &mut Vec<i32>, n: i32) {
    if n == 0 {
        return;
    }

    if m == 0 {
        std::mem::swap(nums1, nums2);
        return;
    }

    let (mut i, mut j) = (m as usize, n as usize);
    let mut iw = i + j;

    while j > 0 {
        if i > 0 && nums1[i - 1] > nums2[j - 1] {
            nums1[iw - 1] = nums1[i - 1];
            i -= 1;
        } else {
            nums1[iw - 1] = nums2[j - 1];
            j -= 1;
        }
        iw -= 1;
    }
}

fn main() {}

#[test]
fn test_merge() {
    let mut nums1 = vec![1, 2, 3, 0, 0, 0];
    let mut nums2 = vec![2, 5, 6];
    merge(&mut nums1, 3, &mut nums2, 3);
    assert_eq!(nums1, vec![1, 2, 2, 3, 5, 6]);

    let mut nums1 = vec![1];
    let mut nums2 = vec![];
    merge(&mut nums1, 1, &mut nums2, 0);
    assert_eq!(nums1, vec![1]);

    let mut nums1 = vec![0];
    let mut nums2 = vec![1];
    merge(&mut nums1, 0, &mut nums2, 1);
    assert_eq!(nums1, vec![1]);

    let mut nums1 = vec![0, 0, 0];
    let mut nums2 = vec![2, 5, 6];
    merge(&mut nums1, 0, &mut nums2, 3);
    assert_eq!(nums1, vec![2, 5, 6]);

    let mut nums1 = vec![4, 5, 6, 0, 0, 0];
    let mut nums2 = vec![1, 2, 3];
    merge(&mut nums1, 3, &mut nums2, 3);
    assert_eq!(nums1, vec![1, 2, 3, 4, 5, 6]);

    let mut nums1 = vec![1, 2, 4, 0, 0, 0];
    let mut nums2 = vec![3, 5, 6];
    merge(&mut nums1, 3, &mut nums2, 3);
    assert_eq!(nums1, vec![1, 2, 3, 4, 5, 6]);
}
