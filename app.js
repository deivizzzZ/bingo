let drumNumbers = _.range(1, 91);
drumNumbers = _.shuffle(drumNumbers);

function createCard() {
  let playerNumbers = _.range(1, 91);
  playerNumbers = _.shuffle(playerNumbers);
  playerNumbers = playerNumbers.slice(0, 14);

  let cpuNumbers = _.range(1, 91);
  cpuNumbers = _.shuffle(cpuNumbers);
  cpuNumbers = cpuNumbers.slice(0, 14);

  const numberPlayer = document.querySelector(".number-player");
  for(let number in playerNumbers){
    let playerDiv = document.createElement("div");
    playerDiv.className = `number${number}`;
    numberPlayer.appendChild(playerDiv);
  };

  const numberCPU = document.querySelector(".number-cpu");
  for(let number in cpuNumbers){
    let cpuDiv = document.createElement("div");
    cpuDiv.className = `number${number}`;
    numberCPU.appendChild(playerDiv);
  };
}

function showCard(element, card) {
}

function newNumber() {
    let newNumber = drumNumbers.shift();

    divNumber = document.querySelectorAll('number' + newNumber);
    divNumber.classList.add('tachado');

  checkWinner();
}

function checkWinner() {


  let divNumberPlayer = document.querySelectorAll('.number-player > .tachado');
  let divNumberCPU = document.querySelectorAll('.number-cpu > .tachado');

  if (divNumberPlayer.length === 15) {
    bingoButton.remove();

  }


}

let bingoButton = document.querySelector("button");
bingoButton.addEventListener("click", newNumber);

createCard();
