'use strict';
/*
const julisData = [9, 16, 6, 8, 3];
const katesData = [4, 1, 15, 8, 3];

const checkDogs = function (dogsJulias, dogsKate) {
    console.log('=====Julias Dogs=====');
    dogsJulias.slice(1, 3).forEach(function (val, i, arr) {
        if (val >= 3) {
            console.log(`Dog Number ${i + 1} is and Adult and is ${val} Years old`);
        } else {
            console.log(`Dog Number ${i + 1} puppy and is still a puppy`);
    }
  });

  console.log('=====kate dogs=====');
  dogsKate.forEach(function (val, i, arr) {
    if (val >= 3) {
        console.log(`Dog Number ${i + 1} is and Adult and is ${val} Years old`);
    } else if (val < 3) {
        console.log(`Dog Number ${i + 1} puppy and is still a puppy`);
    }
});
};

checkDogs(julisData, katesData);


const julisData = [9, 16, 6, 8, 3];
const katesData = [4, 1, 15, 8, 3];

const calcAverageHumanAge = julisData.map(ages => {
    if (ages <= 2) {
        return 2 * ages;
    } else {
        return 16 + ages * 4;
}
});

console.log(calcAverageHumanAge);

const removeAges = calcAverageHumanAge.filter(less => less > 18);

console.log(removeAges);

const averageOfAdult = calcAverageHumanAge.reduce(
    (acc, avge) => acc + avge / calcAverageHumanAge.length,
);

console.log(averageOfAdult);

const julisData = [9, 16, 6, 8, 3];
const katesData = [4, 1, 15, 8, 3];
const calAverageHuman = julisData
.map(ages => (ages >= 2 ? ages * 2 : 16 + ages * 4))
.filter(ages => ages >= 18)
.reduce((acc, ages) => acc + ages / julisData.length);

console.log(calAverageHuman);

*/
