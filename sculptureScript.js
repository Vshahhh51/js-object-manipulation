const sculptureList = require("./data.js");

const sculptureListLengths = {};

sculptureList.forEach((sculpture) => {
  const lengths = {};

  for (const key in sculpture) {
    lengths[key] = sculpture[key].length;
  }

  sculptureListLengths[sculpture.name] = lengths;
});
console.log(sculptureListLengths);
