
const sculptureList = require('./data.js');


const sculptureListLengths = [];


for (const sculpture of sculptureList) {
  const lengths = {};

  for (const key in sculpture) {
    lengths[key] = sculpture[key].length;
  }

  sculptureListLengths.push(lengths);
}

console.log(sculptureListLengths);


module.exports = sculptureListLengths;
