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

titleize(["John", "Joe", "Jack"], printNames);