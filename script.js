const keyboard = document.querySelector(".keyboard");

for (let i = 65; i <= 90; i++) {
    const button = document.createElement('button');
    button.innerText = String.fromCharCode(i)
    keyboard.appendChild(button);
}

const getRandomWord = () => {
    const {word, hint} = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(word, hint)
}

getRandomWord();
