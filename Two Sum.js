/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var nums = [2,7,11,15];
 var target = 9;
 

// filter out numbers within Array that are higher than the Target
// From the newly defined array take number in position 1 and add with number in position 2.
// Continue for number in position 1 until it is added with number in final position.
// Repeat process but commencing from position 2 (or +1 from previous)
// If sum of two numbers equals target, note down the respective positions

var twoSum = function(nums, target) {
    console.log(nums, target);
};

var testReturn = function() {
    let banana = "Banana";
    console.log("I'm inside test return");
    return banana;
};

var newArray = function(nums, target) { 

};

// calling twoSum (caliing = run the funcion)
twoSum(nums, target);
var peanut;
peanut = testReturn();
console.log("Peanut", peanut);


// testReturn();

