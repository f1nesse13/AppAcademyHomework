const titleize = (nameArr, callback) => {
  let newNames = nameArr.map(name => {
    let newArr = [];
    newArr.push(`Mx. ${name} Jingleheimer Schmidt`)
    return newArr
  });

  callback(newNames);
  return newNames;
}

const printNames = (arr) => {
  arr.forEach(ele => {
    console.log(ele.toString());
  });
}

// titleize(["John", "Joe", "Jack"], printNames);


// Phase 2

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
};
// const elephant1 = new Elephant("Joey", 54, ["riding a bike"]);

Elephant.prototype.trumpet = function() {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`)
};

Elephant.prototype.grow = function () {
  this.height += 12;
};

Elephant.prototype.addTrick = function (trick) {
  this.tricks.push(trick);
};

Elephant.prototype.play = function () {
  index = Math.floor(Math.random() * this.tricks.length);
  console.log(this.tricks[index])
}

