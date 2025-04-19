// # CIAO
console.log("JS OK");

// --------------------------ESERCIZIO 1------------------------------------------------

// # ACQUISIZIONE DATI DOM

const formStringa = document.getElementById("form-stringa");

formStringa.addEventListener("submit", function (e) {
  e.preventDefault();

  const valueStringa = document.getElementById("inputStringa").value;
  //   console.log(valueStringa);
  getFarfallino(valueStringa);
});

// # TRASFORMAZIONE IN FARFALLINO

const getFarfallino = (stringa) => {
  let newWord = "";
  for (let i = 0; i < stringa.length; i++) {
    let currentValue = stringa[i];

    if ("aeiou".includes(currentValue.toLowerCase())) {
      newWord += `i${currentValue}i`;
    } else {
      newWord += currentValue;
    }
  }

  console.log(newWord);
  return;
};

// --------------------------ESERCIZIO 2------------------------------------------------

// # ACQUISIZIONE DATI DOM

const formInfinityStringa = document.getElementById("form-infinity-stringa");

formInfinityStringa.addEventListener("submit", function (e) {
  e.preventDefault();

  const valueInfinityStringa = document.getElementById("input-ininity-stringa").value;
  const indexStart = parseInt(document.getElementById("index-start-infinity-stringa").value);
  const indexEnd = parseInt(document.getElementById("index-end-ininity-stringa").value);
  //   console.log(valueStringa);
  getIndexRange(valueInfinityStringa, indexStart, indexEnd);
});

// # ALGORITMO

const getIndexRange = (stringa, indexStart, indexEnd) => {
  let newWord = "";
  for (let i = 0; i < stringa.length; i++) {
    let currentValue = stringa[i];
    if (i >= indexStart && i <= indexEnd) {
      newWord += currentValue;
    }
  }

  console.log(newWord);
  return;
};

// --------------------------ESERCIZIO 3------------------------------------------------

const array = [1, 3, 5, 2, 10, 6, 4, 9];
let arrayPari = [];

const pari = (array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    if (currentValue % 2 === 0) {
      newArray.push(currentValue);
    }
  }
  return newArray;
};

arrayPari = pari(array);
console.log("ESERCIZIO SU ARRAY N.1 " + arrayPari);

// --------------------------ESERCIZIO 4------------------------------------------------

const arrayDue = [1, 3, 5, 2, 10, 6, 4, 9];

const formPariDispari = document.getElementById("form-pari-dispari");

formPariDispari.addEventListener("submit", function (e) {
  e.preventDefault();
  let currentValue = 0;
  const newArray = [];

  const optionPari = document.getElementById("option-pari");
  const optionDispari = document.getElementById("option-dispari");

  if (optionPari.checked) {
    for (let i = 0; i < arrayDue.length; i++) {
      currentValue = arrayDue[i];
      if (currentValue % 2 === 0) {
        newArray.push(currentValue);
      }
    }
    return console.log("ecco l'Array dei numeri PARI: " + newArray);
  } else {
    for (i = 0; i < arrayDue.length; i++) {
      currentValue = arrayDue[i];
      if (currentValue % 2 === 1) {
        newArray.push(currentValue);
      }
    }
    return console.log("ecco l'Array dei numeri DISPARI: " + newArray);
  }
});

// --------------------------ESERCIZIO 5------------------------------------------------
const arrayDiOggetti = [
  { name: "Marco", age: 22 },
  { name: "Anna", age: 24 },
  { name: "Luca", age: 17 },
  { name: "Gianni", age: 53 },
];

// for (let i = 0; i < arrayDiOggetti.length - 1; i++) {
//   for (let j = 0; j < arrayDiOggetti.length - 1 - i; j++) {
//     if (arrayDiOggetti[j].age > arrayDiOggetti[j + 1].age) {

//       let temp = arrayDiOggetti[j];
//       arrayDiOggetti[j] = arrayDiOggetti[j + 1];
//       arrayDiOggetti[j + 1] = temp;
//     }
//   }
// }

arrayDiOggetti.sort((a, b) => a.age - b.age);

console.log("Array ordinato:", arrayDiOggetti);
