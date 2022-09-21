// find element in sorted array arr which is greater than or equal to given target n

/*
https://www.youtube.com/watch?v=W9QJ8HaRvJQ&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=15
*/

function findCeil(arr, n) {

  let l = 0;
  let r = arr.length - 1;
  let isAsc = arr[l] <= arr[r];
  let ans = -1;

  while (l <= r) {
    console.log("l, r: " + l + " " + r);
    let mid = Math.floor(l + (r - l) / 2);
    if (arr[mid] === n) {
      ans = mid;
      break;
    }

    if (isAsc) {
      if (arr[mid] > n)
        r = mid - 1;
      else
        l = mid + 1;
    } else {
      if (arr[mid] < n)
        r = mid - 1;
      else
        l = mid + 1;
    }
  }

  if (ans == -1) {
    ans = l;
  }

  while (arr[ans] === arr[ans + 1]) ans++;

  return ans;
}

//console.log(findCeil([1, 3, 5, 7], 6));

//console.log(findCeil([1, 3, 5, 5, 6, 7], 6));

//console.log(findCeil([2, 3, 5, 9, 14, 16, 18], 15));

console.log(findCeil([2, 3, 5, 9, 14, 14, 16, 18], 14));