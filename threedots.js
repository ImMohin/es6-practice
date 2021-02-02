const ages = [12, 14, 16, 18];
const ages2 = [15, 25, 22, 45, 31];
const ages3 = [32, 35, 52, 45, 25, 36];

const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];

// console.log(allAges2);

// max number 

const business = 650 ;
const minister = 750;
const sochib = 250;

// const maximum = Math.max(business, minister, sochib);
const takaPoisha = [650, 450, 250];
const maximum = Math.max(...takaPoisha);
console.log(maximum);