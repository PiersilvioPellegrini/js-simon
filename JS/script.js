//creo le varibaili globali
const OutRandomNumber = document.getElementById("randomNumber");
const outNumber = document.getElementById("outNumber");
// array numeri random
const numeriRandom = [];
// array numeriUtente
const numeriUtente = [];

//creo la funzione per generare i numeri random
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// inserisco nell'array i numeri casuali generati=
for (let i = 0; i < 5; i++) {
  numeriRandom.push(getRandomNumber(1, 100));
}

//stampo i numeri random
OutRandomNumber.innerHTML =
  "RICORDA I SEGUENTI NUMERI:" + "<br>" + numeriRandom;

// dopo aver creato e riempiro l'array lo faccio sparire dopo 30 secondi
const time = setTimeout(function () {
  OutRandomNumber.innerHTML = "";
  // aspetta 30 secondi e poi fa sparire l'array
}, 30000);

const time2 = setTimeout(function () {
  // richiedo all'utente di inseirere i numeri e li inserisco nell'array
  for (let i = 0; i < 5; i++) {
    numeriUtente.push(parseInt(prompt("inserisci i numeri")));
  }
  console.log(numeriUtente);
  // mostro i numeri inseriri dall'utente
  OutRandomNumber.innerHTML =
    "numeri inseriti dall'utente:" + numeriUtente + "<br>";
  // stampo i numeri indovinati
  const numeriIndovinati = confrontaNumeri(numeriRandom, numeriUtente);
  if (numeriIndovinati.length > 0) {
    outNumber.innerHTML =
      " i numeri indovinati sono i seguenti:" + numeriIndovinati + "<br>";
    console.log(numeriIndovinati);
  } else {
    OutRandomNumber.innerHTML =
      "i numeri inseriti sono" + "<br>" + numeriUtente + "<br>";
    outNumber.innerHTML = "non hai indovinato nessun numero";
    console.log("non hai indovinato nessun numero");
  }
  //   aspetta 60 secondi
}, 31000);

// creo la funzione per confrontare i numeri inseriti dall'utente con quelli random
function confrontaNumeri(numeriRandom, numeriUtente) {
  // creo array numeri indovinati
  const numeriIndovinati = [];
  //   scorro l'array dei numeri UTENTE
  for (let i = 0; i < numeriRandom.length; i++) {
    if (numeriUtente.includes(numeriRandom[i])) {
      numeriIndovinati.push(numeriRandom[i]);
    }
  }
  return numeriIndovinati;
}
