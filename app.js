let drumNumbers = _.range(1, 91);
drumNumbers = _.shuffle(drumNumbers);

function createCard() {
  let playerNumbers = _.range(1, 91);
  playerNumbers = _.shuffle(playerNumbers);
  playerNumbers = playerNumbers.slice(0, 15);

  let cpuNumbers = _.range(1, 91);
  cpuNumbers = _.shuffle(cpuNumbers);
  cpuNumbers = cpuNumbers.slice(0, 15);

  const numberPlayer = document.querySelector(".number-player");
  for(let number of playerNumbers){
    let playerDiv = document.createElement("div");
    playerDiv.className = `number${number}`;
    playerDiv.innerText = number;
    numberPlayer.appendChild(playerDiv);
  };

  const numberCPU = document.querySelector(".number-cpu");
  for(let number of cpuNumbers){
    let cpuDiv = document.createElement("div");
    cpuDiv.className = `number${number}`;
    cpuDiv.innerText = number;
    numberCPU.appendChild(cpuDiv);
  };
}

function newNumber() {
    let newNumber = drumNumbers.shift();

    let numberContainer = document.querySelector(".number-container");
    numberContainer.innerText = newNumber;

    const divNumber = document.querySelectorAll(`.number${newNumber}`);
    for(let number = 0; number < divNumber.length; number++){
      divNumber[number].classList.add("tachado");
    }

  checkWinner();
}

function checkWinner() {
  let divNumberPlayer = document.querySelectorAll('.number-player > .tachado');
  let divNumberCPU = document.querySelectorAll('.number-cpu > .tachado');

  if(divNumberPlayer.length === 15){
    bingoButton.remove();
    let winner = document.createElement("p");
    winner.innerText = "¡HAS GANADO!"
    bingoContainer.appendChild(winner);
  }
  else if(divNumberCPU.length === 15){
    bingoButton.remove();
    let winner = document.createElement("p");
    winner.innerText = "¡HAS PERDIDO!"
    bingoContainer.appendChild(winner);
  }
}

const bingoContainer = document.querySelector(".bingo");

const bingoButton = document.querySelector("button");
bingoButton.addEventListener("click", newNumber);

createCard();
