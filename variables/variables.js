// there are many possible and correct variable names
const rosePrice = 8;
const lilyPrice = 10;
const tulipPrice = 2;

let numberOfRoses = 20;
let numberOfLilies = 30;
let numberOfTulips = 120;

let rosesValue = rosePrice * numberOfRoses;
let liliesValue = lilyPrice * numberOfLilies;
let tulipsValue = tulipPrice * numberOfTulips;

let total = rosesValue + liliesValue + tulipsValue;
console.log(
  "Rose – unit price:",
  rosePrice,
  ", quantity:",
  numberOfRoses,
  ", value:",
  rosesValue
);
console.log(
  "Lily – unit price:",
  lilyPrice,
  ", quantity:",
  numberOfLilies,
  ", value:",
  liliesValue
);
console.log(
  "Tulip – unit price:",
  tulipPrice,
  ", quantity:",
  numberOfTulips,
  ", value:",
  tulipsValue
);
console.log("Total: ", total);
