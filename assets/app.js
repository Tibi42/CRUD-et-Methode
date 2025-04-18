const MonTableau = [1, 2, 3, 4, 5];
// EXO #1
// Doublez tout les nombres du tableau
// EXO #2
// filtrer un tableau pour ne garder que les nombres pairs
// filtrer un tableau pour ne garder que les nombres impairs
// EXO #3
// transformer le tableau en une valeur simple, statique en recuperant la valeur max
// transformer le tableau en une valeur simple, statique en recuperant la valeur min
// EXO #4
// faire un addition de tout les elements du tableau
// faire une multiplication de tout les elements du tableau
// EXO #5
// trouver si un tableau contient un element impair

// exo 1 Doublez tout les nombres du tableau

//  methode map
let MonTableauDouble = MonTableau.map((element) => element * 2);
console.log(MonTableauDouble);

// function doubledNumbers(numbers) {
//   const result = [];
//   numbers.forEach((element) => {
//     result.push(element * 2);
//   });
//   return result;
// }

// console.log(doubledNumbers(MonTableau));

// methode classique avec la boucle for
// for (let index = 0; index < MonTableau.length; index++) {
//         MonTableau[index] = MonTableau[index] * 2
// }

// console.log(MonTableau);

// exo 2 filtrer un tableau pour ne garder que les nombres pairs
// filtrer un tableau pour ne garder que les nombres impairs

let pair = MonTableau.filter((element) => element % 2 === 0);
console.log(pair);

let impair = MonTableau.filter((element) => element % 3 === 0);
console.log(impair);

// function getEvenNumbers1(numbers) {
//   let result = [];
//   for (const listNumber of numbers) {
//     if (listNumber % 2 === 0) {
//       result.push(listNumber);
//     }
//   }
//   return result;
// }

// console.log(getEvenNumbers1(MonTableau));

// function getEvenNumbers2(numbers) {
//   let result = [];
//   for (const listNumber of numbers) {
//     if (listNumber % 3 === 0) {
//       result.push(listNumber);
//     }
//   }
//   return result;
// }
// console.log(getEvenNumbers2(MonTableau));

// EXO #3
// transformer le tableau en une valeur simple, statique en recuperant la valeur max

let max = Math.max(...MonTableau);
console.log(max);

let max1 = MonTableau.reduce((a, b) => Math.max(a, b), -Infinity);
console.log(max1);

// function getMax(numbers) {
//   let result = [];
//   for (const listNumber of numbers) {
//     if (listNumber > result) {
//       result = listNumber;
//     }
//   }
//   return result;
// }

// console.log(getMax(MonTableau));

// let max = MonTableau[0];
// for (let index = 0; index < MonTableau.length; index++) {
//   if (MonTableau[index] > max) {
//     max = MonTableau[index];
//   }
// }

// console.log(max);

// EXO #4
// faire un addition de tout les elements du tableau
// faire une multiplication de tout les elements du tableau

let sumWithInitial = MonTableau.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sumWithInitial);

let multWithInitial = MonTableau.reduce(
  (accumulator, currentValue) => accumulator * currentValue
);

console.log(multWithInitial);

function mult(array) {
  let result = 1;
  for (let nombre of array) {
    result *= nombre;
  }
  return result;
}
console.log(mult(MonTableau));

function add(array) {
  let result = 0;
  for (let nombre of array) {
    result += nombre;
  }
  return result;
}
console.log(add(MonTableau));

// EXO #5
// trouver si un tableau contient un element impair

// const found = MonTableau.find((element) => element % 3 === 0);
// console.log(found);

const found1 = MonTableau.reduce((nombre) => {
  return nombre % 2 !== 0;
});
console.log(found1);

const found2 = MonTableau.reduce((nombre) => {
  return nombre % 3 === 0;
});
console.log(found2);

