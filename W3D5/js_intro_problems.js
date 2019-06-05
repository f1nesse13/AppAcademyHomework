// JS Intro

function mysteryScoping1() {
  var x = "out of block";
  if (true) {
    var x = "in block";
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping2() {
  const x = "out of block";
  if (true) {
    const x = "in block";
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping3() {
  const x = "out of block";
  if (true) {
    var x = "in block";
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping4() {
  let x = "out of block";
  if (true) {
    let x = "in block";
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping5() {
  let x = "out of block";
  if (true) {
    let x = "in block";
    console.log(x);
  }
  let x = "out of block again";
  console.log(x);
}

// mysteryScoping1();
// mysteryScoping2();
// mysteryScoping3();
// mysteryScoping4();
// mysteryScoping5();

var madLib = (verb, adj, noun) => {
  console.log(`We shall ${verb} the ${adj} ${noun}.`);
};

var isSubstring = (searchString, subStr) => {
  return searchString.includes(subStr);
};

// Phase II

var fizzBuzz = arr => {
  var rtnArr = [];
  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      continue;
    } else if (arr[i] % 3 === 0 || arr[i] % 5 === 0) {
      rtnArr.push(arr[i]);
    }
  }
  return rtnArr;
};

const isPrime = num => {
  if (num === 2 || num === 3) {
    return true;
  } else if (num === 1) {
    return false;
  } else {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
  }
  return true;
};

const sumOfNPrimes = n => {
  let count = 0;
  let checkPrime = 0;
  let sum = 0;
  while (count <= n) {
    if (isPrime(checkPrime)) {
      sum += checkPrime;
      count++;
    }
    checkPrime++;
  }
  return sum;
};
