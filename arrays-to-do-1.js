//---------------1. Push Front
/**Given an array and an additional value,
 * insert this value at beginnig of the array without
 * using any built in array methods
 */
//function takes array and additional value
const pushFront = (array, value) => {
  //let i equal the length of the array minus 1; while i greater than or equal to 0, do the thig; decrement i by 1
  for (var i = array.length - 1; i >= 0; i--) {
    //current array index plus one equals current array index (shifts em up a index by one)
    array[i + 1] = array[i];
  }
  //sets first index of array to the additional value
  array[0] = value;
  //logs the new array to the console.
  console.log(array);
};
//test values
let testArray = [1, 2, 3, 4];
let value = 10;
//calls pushFront with test values
pushFront(testArray, value); //logs out [10, 1, 2, 3, 4]

//------------------2. Pop Front
/**Given an array, remove and return the value at the beginning of the array.
 * Do this without using any built in array methods except pop()
 */
const popFront = (array) => {
  //create new array and add first and last index from array
  let newArray = [array[0], array[array.length - 1]];
  //set first index of orignal array to index 1 of newArray (which was the original last index of original array)
  array[0] = newArray[1];
  //set last index of original array to index 0 of newArray (which was the original first index of original array)
  array[array.length - 1] = newArray[0];
  //return the popped off value which was originally at the beginning of testArray2
  return array.pop();
};

let testArray2 = [1, 2, 3, 4];
console.log(popFront(testArray2)); //returns 1

//----------------3. Insert At
/** Given an array, index, and additional value, insert the value into array at given index.
 * Do this without using built-in array methods. Think of pushFront(arr,val) as equivalent
 * to insertAt(arr,0,val);
 */

//takes in  an array, index and additional value
const insertAt = (array, index, value) => {
  //set i to index lenth of array -1; while i is greater than or equal to 0, do the thing; decrement i by 1
  for (let i = array.length - 1; i >= 0; i--) {
    //adds an index to the end of the array and makes it equal to the last item in the array
    array[i + 1] = array[i];
    // console.log(array[i]);
    // console.log(array);
  }
  //when all that is done, this inserts the provided value at provided index
  array[index] = value;
  //return the resulting array
  console.log("The resulting array is [" + array + "]");
  return array;
};

let testArray3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
insertAt(testArray3, 1, 10); //The resulting array is [1,10,3,4,5,6,7]
