// const loopMe = function (maxCount, counter = 0) {
//   if (counter < maxCount) {
//     // check if counter if less than maxCount
//     console.log(`This should run 10 times (${counter})`);
//     // return this function that has now have counter increase by one
//     return loopMe(maxCount, counter + 1);
//   }
// };

// loopMe(10);

// concept using callback function
// const loopMe = function (maxCount, callback, counter = 0) {
//   if (counter < maxCount) {
//     // check if counter if less than maxCount
//     callback(counter);
//     // return this function that has now have counter increase by one
//     return loopMe(maxCount, callback, counter + 1);
//   }
// };

// loopMe(10, function (counter) {
//   console.log(`This should run 10 times (${counter})`);
// });

const calcPower = function (num, power = 1) {
  if (power !== 1) {
    return num * calcPower(num, power - 1);
  }

  return num;
};

// console.log();
calcPower(2, 3);
