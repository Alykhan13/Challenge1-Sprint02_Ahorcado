const btnPlay = document.getElementById("btn__play");
const btnAddWords = document.getElementById("btn__add-words");
const btnAdd = document.getElementById("btn__add");
const btnBack = document.getElementById("btn__back");
const btnRestart = document.getElementById("btn__restart");
const btnMenu = document.getElementById("btn__menu");
const input = document.getElementById("input");

let chosenWord;
let lifes;
let wordSize;
let wordCompleted;
let lettersUsed = [];

let words = [
    "gis", "luz", "pus", "res", "mes", "sed",
    "mapa", "chat", "pala", "casa", "mano", "sapo", "pavo",
    "calor", "temor", "pavor", "letra", "jugar",
    "mueble", "muelle", "cabeza", "cereza",
    "camello", "rodilla", "ardilla",
    "zoologico",
    "locomotora"
];
let lastWords = [];

function chooseRandomWord() {
    const max = (words.length)-1;
    const min = 0;
    let generatedWord = "";
    let repeated = false;

    if(lastWords.length == words.length) {
        console.log("Lista de palabras usadas llenas... reiniciando lista");
        lastWords= [];
    }

    do{
        repeated = false;
        let random = Math.round(Math.random()*(max-min)+min);

        generatedWord = words[random];

        for(let i=0;i<lastWords.length;i++) {
            if(lastWords[i] == generatedWord) {
                console.log("REPETICION ENCONTRADA: " + lastWords[i]);
                repeated = true;
                break;
            } 
        }
    } while(repeated);

    wordSize = generatedWord.length;
    lastWords.push(generatedWord);
    console.log(lastWords);
    
    return generatedWord;
}

function addWord(newWord) {
    let repeated = false;
    for(let i=0;i<words.length;i++) {
        if(words[i] == newWord)
            repeated = true;
    }

    if(!repeated) words.push(newWord);
}

function loadWord() {
    const ulElement = document.getElementById("correct-word__ul");
    ulElement.innerHTML = "";
    chosenWord = chooseRandomWord().toUpperCase();
    //let chosenWord = "WWW"
    console.log(chosenWord);

    for(let i=0;i<chosenWord.length;i++) {
        let create_liElement = document.createElement("li");
        let create_spanElement = document.createElement("span");

        create_liElement.setAttribute("id","correct-word__li");
        if(chosenWord.length>=9) {
            create_liElement.classList.add("large-word__li");
        }
        create_spanElement.classList.add("letter");
        create_spanElement.classList.add("letter--hidden");
        create_spanElement.textContent = chosenWord.charAt(i);

        ulElement.appendChild(create_liElement);
        create_liElement.appendChild(create_spanElement);
    }
}

function showEndgamePhrase() {
    const endGamePhrase = document.getElementById("endgame");

    if(lifes == 0) {
        endGamePhrase.classList.add("lose");
        endGamePhrase.innerHTML = "Has perdido :(";
        btnRestart.classList.add("btn-lose");
    } else {
        endGamePhrase.classList.add("win");
        endGamePhrase.innerHTML = "¡Has ganado! :D";
        btnRestart.classList.add("btn-win");
    }
}

function showWrongLetter(letterInput) {
    const wrongLettersDisplay = document.getElementById("wrong-letters__display");

    wrongLettersDisplay.innerHTML += letterInput.toUpperCase() + " ";
}

function showCorrectLetter(letterInput) {
    let letterHidden = document.querySelectorAll(".letter");
    
    letterHidden.forEach(function(letter) {
        if(letterInput.toUpperCase() == letter.textContent) {
            letter.classList.remove("letter--hidden");
            wordCompleted++;
        }
    });
}

function showLines() {
    let count = 10-lifes;
    let id = "line" + count;

    let line = document.getElementById(id);

    line.classList.remove("hidden");
}

function restartLifes() {
    lifes = 9;
    wordCompleted = 0;
    lettersUsed = [];
}

function restartDraw() {
    const hangmanDraw = document.querySelectorAll(".hangman__draw");
    const endGamePhrase = document.getElementById("endgame");

    endGamePhrase.innerHTML = "";
    endGamePhrase.classList.remove("lose");
    endGamePhrase.classList.remove("win");

    hangmanDraw.forEach(function(line) {
        line.classList.add("hidden");
    });
}

function restartWrongLetters() {
    const wrongLettersDisplay = document.getElementById("wrong-letters__display");

    wrongLettersDisplay.innerHTML = "";
}

function loadGame() {
    btnRestart.classList.remove("btn-lose");
    btnRestart.classList.remove("btn-win");
    restartWrongLetters();
    restartDraw();
    restartLifes();
    loadWord();
    showLines();
    addEventListener("keypress", hearingLetters);
}

function hearingLetters(e) {
    
    let alreadyUsed = false;
    console.log("Letras usadas, entrada: " + lettersUsed);

    if(e.key >= "a" && e.key <= "z") {
        console.log(e.key);

        let letter = new RegExp(e.key,"i");

        for(let i=0;i<lettersUsed.length;i++) {
            if(e.key == lettersUsed[i]) {
                alreadyUsed = true;
            }
        }

        if(!alreadyUsed) {
            if(!letter.test(chosenWord)) {
                lifes--;
                showLines();
                showWrongLetter(e.key);
                if(lifes == 0) {
                    removeEventListener("keypress",hearingLetters);
                    showEndgamePhrase();
                }
            } else { //hacer una iteracion para comprobar todas las letras y ver si hay coincidencia
                showCorrectLetter(e.key);
                if(wordCompleted == wordSize) {
                    removeEventListener("keypress",hearingLetters);
                    showEndgamePhrase();
                }
            }
            lettersUsed.push(e.key);
            console.log("Letras usadas, salida: " + lettersUsed);
        }
    }
}

btnAddWords.addEventListener("click", function(e) {
    const addWords = document.getElementById("add-words__field");
    e.preventDefault();
    addWords.classList.remove("add-words--hidden");
    input.focus();
});

btnBack.addEventListener("click", function(e) {
    const addWords = document.getElementById("add-words__field");
    e.preventDefault();
    addWords.classList.add("add-words--hidden");
    input.value = "";
});

btnAdd.addEventListener("click", function(e) {
    if(!input.value) {
        alert("No hay palabra para agregar");
    }
    if(input.value && (input.value.length < 2 || input.value.length > 10)) {
        alert("La palabra debe contener de 2 a 10 caracteres");
    }
    if(input.value.length >= 2 && input.value.length <= 10) {
        addWord(input.value);
        alert("Palabra agregada con éxito");
    }

    input.value = "";
});

btnPlay.addEventListener("click", function(e) {
    e.preventDefault();
    const overlay = document.getElementById("overlay__field");
    overlay.classList.add("overlay--hidden");
    loadGame();
    
    btnRestart.addEventListener("click", loadGame);

});

btnMenu.addEventListener("click", function(e) {
    const overlay = document.getElementById("overlay__field");
    overlay.classList.remove("overlay--hidden");

    removeEventListener("keypress", hearingLetters);
});