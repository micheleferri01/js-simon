// Elementi DOM
const countdown = document.getElementById("countdown");
const instructions = document.getElementById("instructions");
const numberslist = document.getElementById("numbers-list");
const answersForm = document.getElementById("answers-form");
const inputGroup = document.getElementById("input-group");

console.log(countdown);
console.log(instructions);
console.log(numberslist);
console.log(answersForm);
console.log(inputGroup);

// todo:
//* visualizzare timer nel DOM
// contatore per countdown
let countdownCounter = 30;

countdown.innerText = countdownCounter;

//* generare 5 numeri random
const randomNumbers = [];
for(let i = 0; i < 5; i++){
    const randomNum = Math.floor(Math.random() * (50 - 1 + 1) - 1);
    randomNumbers.push(`${randomNum}`);
}
console.log(randomNumbers);
//* aggiugere i numeri generati al DOM
//* avviare timer ed impostare condizioni di fine countdown
//* nascondere i numeri generati in modo che l'utente non possa più vederli
//* visualizzare il form da compilare per l'utente
//* leggere il form al submit
//* controllare i valori inseriti dall'utente
//* visualizzare un messaggio con quanti numeri ha indovinato l'utente