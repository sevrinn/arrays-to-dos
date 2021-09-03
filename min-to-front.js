/**
 * **************** Min to Front ***************************
 * Given an array of comparable values, move the lowest element to arrays front,
 * shifting backward any element previeous ahead of it.
 * Do not otherwise change the arrays order.
 * Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it.
 * Do this without using built-in functions.
 */

//set up function that takes a given array
const minToFront = (arr) => {
  //set min to equal the value of arr at index 0
  let min = arr[0];
  //set minIndex to equal 0 for now;
  let minIndex = 0;
  //logs the current value of min
  console.log(min);
  //find min
  //set i to equal 0; while i is less than the length of the array, do the thing; increment i by 1
  for (let i = 0; i < arr.length; i++) {
    //if value at current array index is less than min
    if (arr[i] < min) {
      //set the minIndex to current index
      minIndex = i;
      //set min to value of current index
      min = arr[i];
    }
  }
  //logs new value of min after going through array and comparing
  console.log("Value of min after that last for loop" + min);
  //logs the position the min is at in the array
  console.log("The minimum value is at index " + minIndex + " of given array");

  //once min is found, move eveything to left of min to the right
  //set k to the minIndex; while k is greater than 0(the first index), do the thing; decrement k by 1
  //THIS IS THE pushFront function from arrays-to-do-1!!!
  for (let k = minIndex; k > 0; k--) {
    //the thing:
    //set the current value of to equal the value of the index before it
    arr[k] = arr[k - 1];
    // console.log(arr);
  }
  //set the first index to the saved min value;
  arr[0] = min;

  console.log(arr);
  //return
  return arr;
};
// const testArray4 = [4, 2, 1, 3, 5];
const testArray5 = [23, 5, 7, 4, 3, 67, 2];
minToFront(testArray5);

/**
 * okay just a note for myself:
 * phew!
 * I had a difficult time with this and here's why so i dont do this again.
 * After the first for loop that finds the value of min and saves the minIndex,
 * I tried using an array nested in an array to shift them all down. i really dont know why. made sense on paper?
 * it worked for the given test case but not if i changed the test array.
 * What actually needed to go there way the pushFront function that we had done in the
 * previous assignment, arrays-to-do-1.js.
 * What I forgot is that I DID THIS already at like 1 AM. LOL. more rest, more water.
 * I got this!
 */
