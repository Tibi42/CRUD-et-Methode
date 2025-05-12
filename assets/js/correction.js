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

//  methode map : mon tableau de sortie est different mais il fait la meme longueur que le tableau d'entrée
let MonTableauDouble = MonTableau.map((element) => element * 2);
console.log(MonTableauDouble);

// exo 2 filtrer un tableau pour ne garder que les nombres pairs
// filtrer un tableau pour ne garder que les nombres impairs

//  methode filter : mon tableau de sortie est different mais plus court que le tableau d'entrée
let pair = MonTableau.filter((element) => element % 2 === 0);
console.log(pair);

let impair = MonTableau.filter((element) => element % 3 === 0);
console.log(impair);

// EXO #3
// transformer le tableau en une valeur simple, statique en recuperant la valeur max

// methode reduce : mon tableau de sortie est un seul element, il n'a pas la meme longueur que le tableau d'entrée
let max = Math.max(...MonTableau);
console.log(max);

let max1 = MonTableau.reduce((a, b) => Math.max(a, b), -Infinity);
console.log(max1);

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
