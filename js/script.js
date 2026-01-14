// Elementi DOM
const countdown = document.getElementById("countdown");
const instructions = document.getElementById("instructions");
const numberslist = document.getElementById("numbers-list");
const answersForm = document.getElementById("answers-form");
const inputGroup = document.getElementById("input-group");
const message = document.getElementById("message");

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
generateRandomNum();

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
        instructions.innerText = "Inserisci i numeri"
        answers();
        clearInterval(intervalId);
    }
}

function generateRandomNum(){
    while (randomNumbers.length < 5) {
        const randomNum = Math.floor(Math.random() * (50 - 1 + 1) + 1);
        let alreadyExists = false;
        
        for (let i = 0; i < randomNumbers.length; i++) {
            if (randomNumbers[i] === randomNum) {
                alreadyExists = true;
            }
        }

        if (!alreadyExists){
            randomNumbers.push(randomNum);
        }
    }

    console.log(randomNumbers);
}

//* visualizzare il form da compilare per l'utente
function answers(){
    //* leggere il form al submit
    answersForm.addEventListener("submit", (e) =>{
        e.preventDefault();
        answersHandler();
    })
    answersForm.classList.remove("d-none");
    
}


// array per salvare le risposte dell'utente
function answersHandler(){
    // contatore per risposte esatte
    let correctAnswersCounter = 0;
    const inputs = [];
    
    for (let i = 0; i < inputGroup.children.length ;i++){
        const currentInput = parseInt(inputGroup.children[i].value);
        //* controllare i valori inseriti dall'utente
        // controllo valore valido
        if (isNaN(currentInput)) {
            message.innerText = "Inserisci solo numeri validi!";
            return;
        }

        // controllo duplicati
        for (let j = 0; j < inputs.length; j++) {
            if (inputs[j] === currentInput) {
                message.innerText = "Non puoi inserire lo stesso numero due volte!";
                return;
            }
        }

        inputs.push(currentInput);
        for (let i = 0; i < randomNumbers.length; i++) {
            if (currentInput === randomNumbers[i]) {
                correctAnswersCounter++;
            }
        }
        //* visualizzare un messaggio con quanti numeri ha indovinato l'utente
        message.innerText = `Hai indovinato ${correctAnswersCounter} numeri.`;
    }
}