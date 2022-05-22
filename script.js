console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");

let turn = "X";
let isgameover = false;

//Function to change the turn 
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

//Function to check for win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.Info').innerText = boxtext[e[0]].innerText + " won ";
            isgameover = true;
            if (boxtext[e[0]].innerText == '0') {
                document.querySelector('.imgBox1').getElementsByTagName('img')[0].style.width = "201px";
            }
            else {
                document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "201px";
            }
            music.play();
            document.querySelector(".line").style.width = "20vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
        }
    })

}
// Game logic
let boxes = document.getElementsByClassName("box")
// Event listner
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("Info")[0].innerText = "Turn for" + " " + turn;
            }
        }
    })
})

//on click listener to reset button state
reset.addEventListener("click", () => {
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = "";
        music.pause();
        music.currentTime = 0;
    });
    turn = "X";
    gameoverr = false;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("Info")[0].innerText = "Turn for" + " " + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.imgBox1').getElementsByTagName('img')[0].style.width = "0px";
})