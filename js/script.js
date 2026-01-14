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
let countdownCounter = 3;

countdown.innerText = countdownCounter;

//* generare 5 numeri random
const randomNumbers = [];

for(let i = 0; i < 5; i++){
    const randomNum = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    randomNumbers.push(`${randomNum}`);
}
console.log(randomNumbers);

//* aggiugere i numeri generati al DOM
for(let i = 0; i < randomNumbers.length; i++){
    numberslist.classList.remove("d-none");
    numberslist.innerHTML += `<li>${randomNumbers[i]}</li>`;
}

//* avviare timer ed impostare condizioni di fine countdown
const intervalId = setInterval(function () {
  timer();  
},1000);

function timer(){
    countdownCounter--;
    countdown.innerText = countdownCounter;
    //* nascondere i numeri generati in modo che l'utente non possa più vederli
    if (countdownCounter <= 0){
        countdown.innerText = "";
        numberslist.classList.add("d-none");
        clearInterval(intervalId);
    }
}
//* visualizzare il form da compilare per l'utente
//* leggere il form al submit
//* controllare i valori inseriti dall'utente
//* visualizzare un messaggio con quanti numeri ha indovinato l'utente