// using for..of with array
const averageofNums = function (args) {
  let sum = 0;
  for (let num of args) {
    sum += num;
  }
  return sum / args.length;
};

console.log(averageofNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// using for..of with object
const userInfos = [
  {
    name: "John",
    age: 25,
  },
  {
    name: "Jane",
    age: 24,
  },
  {
    name: "Jack",
    age: 26,
  },
];

for (let userInfo of userInfos) {
  console.log(`Name: ${userInfo.name}, Age: ${userInfo.age}`);
}

// you dont need to define the number of iterations when using for..of

for (let userInfo in userInfos) {
  console.log(userInfo);
}

// for..in is used to iterate through the keys of an object or an index of an array
