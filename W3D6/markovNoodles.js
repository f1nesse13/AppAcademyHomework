function Cat () {
  this.name = 'Markov';
  this.age = 3;
}

function Dog () {
  this.name = 'Noodles';
  this.age = 4;
}

Dog.prototype.chase = function (cat) {
  console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`)
};

const Markov = new Cat ();
const Noodles = new Dog ();


Noodles.chase(Markov)

// The below will return just our function when we call Noodles.chase and assign 'this' in the order we pass the arguments


//     ---multiple examples---
Noodles.chase.call(Markov, Noodles)
Noodles.chase.call(Noodles, Noodles)
Noodles.chase.call(Markov, Markov)

Noodles.chase.apply(Markov,[Noodles])
Noodles.chase.apply(Noodles,[Noodles])
Noodles.chase.apply(Markov,[Markov])
Noodles.chase.bind(Markov)
