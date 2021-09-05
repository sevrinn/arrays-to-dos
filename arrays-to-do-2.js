/**
 * =====================REVERSE =====================================
 * Given a numerical array, reverse order of values, in-place.
 * The reversed array should have the same length, just reversed.
 * You cannot use a second array (that's what "in-place" means).
 * Do not use built in array functions.
 */
let test = [4, 2, 7, 9, 5];
let test2 = [23, 5252, 73, 52, 737, 2059];

//reverse with a FOR loop
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

//reverse with a WHILE loop
const reverse2 = (arr) => {
  //set start to first array index (always 0 to begin)
  let arrStart = 0;
  //set end to last index of array
  let arrEnd = arr.length - 1;

  //while array start is less than array end
  while (arrStart < arrEnd) {
    //swap the start and end values
    [arr[arrStart], arr[arrEnd]] = [arr[arrEnd], arr[arrStart]];
    //increment starting index by 1
    arrStart++;
    //decrement end index by 1
    arrEnd--;
    //and this goes until they meet in the middle
  }
  console.log(arr);
};
let test = [4, 2, 7, 9, 5];
reverse2(test);

/**
 * =====================ROTATE=====================================
 * Implement rotateArr(arr, shiftBy) that accepts array and offset.
 * Shift arr's values to the right by that amount
 * "Wrap around" any values that shift off the end to other side, so no data is lost
 *
 */
let rotateTest = [1, 2, 3, 4, 5]; // shiftBy = 3
//rotate the whole array
//[5, 4, 3, 2, 1]
//rotate the first shiftBy elements in array
//[3, 4, 5, 2, 1]
//rotate the last elements from shiftBy to the end
//[3, 4, 5, 1, 2]

const rotateArr = (arr, shiftBy) => {
  //modify shiftBy so we arent doing unnecessary steps
  //divide shiftBy by length of array, returning remainder.
  console.log(shiftBy);
  shiftBy %= arr.length;
  console.log(shiftBy);

  const reverseHelper = (arr, arrStart, arrEnd) => {
    while (arrStart < arrEnd) {
      [arr[arrStart], arr[arrEnd]] = [arr[arrEnd], arr[arrStart]];
      arrStart++;
      arrEnd--;
    }
    return arr;
  };
  //need to run this reverseHelper 3 times with slightly diff arguments to
  //get the array shifted over by the given amount
  //1.rotate(reverse) whole array
  //takes array, 0 (first index), and (last index of array)
  reverseHelper(arr, 0, arr.length - 1);

  //2.rotate first shiftBy elements in array
  //takes array, 0 (first index), and given shiftBy - 1 (since we just reversed array, we need to mirror the given shiftBy #)
  reverseHelper(arr, 0, shiftBy - 1);

  //3.rotate last shiftBy elements in array
  //takes array, shiftBy, and (last index of array)
  reverseHelper(arr, shiftBy, arr.length - 1);
  console.log("The rotated array: " + arr);
  return arr;
};
rotateArr(rotateTest, 3);

/**
 * =====================FILTER RANGE=====================================
 * Given an array and values min and max, retain only the array values between min and max.
 * work in-place
 * no built in array functions...AND after HOURS of looking up how
 * to remove without any built in functions, i came up empty.
 * maybe i'm missing something but I'll have to move on for now.
 * This solution works well but uses Splice, so technically fails this specific
 * challenge:/ i did my best:)
 *
 */
const filterRange = (arr, min, max) => {
  //loop through array
  //let i equal 0; while i is less than array length; increment i
  for (let i = 0; i < arr.length; i++) {
    //if current index is less than min or greater than max
    if (arr[i] < min || arr[i] > max) {
      //remove the item at that index and adjusts for it's
      arr.splice(i, 1);
      i--;
    }
    console.log(arr);
  }
};

const filterRangeTestArr = [2, 3, 5, 7, 8, 4, 5, 1];
filterRange(filterRangeTestArr, 5, 8);
//runs 2,3,4 with arr[i]

/**
 * ==========================CONCAT=====================================
 * Replicate JavaScript's concat().
 * Create a standalone function that accepts 2 arrays
 * Return a new array containing the first arr's elements and then the second arr's elements
 * Do not alter original arr's
 *
 *
 */
const concat = (arr1, arr2) => {
  //set newArr by destructuring
  let newArr = [...arr1, ...arr2];
  console.log(newArr);
};

let anArray = [1, 2, 3];
let anotherArray = [4, 5, 6];
concat(anArray, anotherArray);
//returns [1,2,3,4,5,6]

//I do not know if this is the way you wanted us to do it
//this was easier than the filter range and WAY easier than the <rotate className=""></rotate>
