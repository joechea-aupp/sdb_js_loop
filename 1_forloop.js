/**
 * Prints the numbers from 1 to 12, incrementing by 2, using a for loop.
 * x = 1 is call initializer
 * x <= 12 is call condition
 * x = x + 2 is call update
 */

for (let x = 1; x <= 12; x = x + 2) {
  console.log(`counting to ${x}`);
}

// Iterable data type?
const aupp = "American University of Phnom Penh";
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// iterate through the string
for (let i = 0; i < aupp.length; i++) {
  console.log(aupp[i]);
}

// iterate through the array
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
