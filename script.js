/// Sujet 1 ///
const array1 = [10, 15, 3, 7];
const k1 = 17;
const array2 = [1, 8, 10, 21];
const k2 = 19;

/// Sujet 2 ///
const array3 = [3, 7, 8, 3, 6, 1];
const k3 = 3
const array4 = [1, 4, 5, 8];
const k4 = 1

/// Sujet 1 - Exercice 1 ///
const resultat = (array, k) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === Number(k)){
         return true;
      }
    }
  }
  return false;
};

console.log(resultat(array1, k1));
console.log(resultat(array2, k2));

/// Sujet 2 - Exercice 2 ///
const KanyeWest = (array) => {
  let count = 1;
  for (let i = 0; i < array.length - 2; i++) {
    let vue = true;
    for (let j = i + 1; j < array.length - i; j++) {
      if (array[i] <= array[j]) vue = false;
    }
    vue ? count++ : null;
  }
  return count;
};

console.log(KanyeWest(array3));
console.log(KanyeWest(array4));