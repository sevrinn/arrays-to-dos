/**
 * =====================REVERSE =====================================
 * Given a numerical array, reverse order of values, in-place.
 * The reversed array should have the same length, just reversed.
 * You cannot use a second array (that's what "in-place" means).
 * Do not use built in array functions.
 */
let test = [4, 2, 7, 9, 5];
let test2 = [23, 5252, 73, 52, 737, 2059];

const reverse = (arr) => {
  //set i to 0
  //while i is less than or equal to the halfway point of the array, do the thing
  //increment i by 1
  for (let i = 0; i <= Math.floor((arr.length - 1) / 2); i++) {
    //set a temp variable to hold value of current index
    let temp = arr[i];
    //set current index to the last index in the array MINUS value of i
    //which should increase as we go thru
    arr[i] = arr[arr.length - 1 - i];
    // set last index in array MINUS value of i to value of temp
    //which was the original value of arr[i]
    arr[arr.length - 1 - i] = temp;
  }
  console.log(arr);
};

reverse(test2);
