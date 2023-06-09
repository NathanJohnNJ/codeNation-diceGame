// const timeOut = 5000;
const timeOut = 5000;

//opening/title
const welcome = document.getElementById("welcome");
const title = document.getElementById("title");
const titleText = document.getElementById("splitTitle");
const fullTitleText = document.getElementById("titleText");

//scorecard
const wallDiv = document.getElementById("wallDiv");
const wall = document.getElementById("wall");

//bottles
const bottle1 = document.getElementById("bottle1");
const bottle2 = document.getElementById("bottle2");
const bottle3 = document.getElementById("bottle3");
const broken = document.getElementById("broken");
const bottles = [bottle1, bottle2, bottle3];
const bottleText = document.getElementById("bottleText");

//game variables
const mainGame = document.getElementById("mainGame");
const buttons = document.getElementById("buttons");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");
const playAgainBtn  = document.getElementById("playAgainBtn");
const rulesBtn  = document.getElementById("rulesBtn");
const xBtn  = document.getElementById("xBtn");
let points = 0;

//dice variables
const allDice  = document.getElementById("dice");
const rolling = document.getElementById("rolling");
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const dice3 = document.getElementById("dice3");
const dice4 = document.getElementById("dice4");
const dice5 = document.getElementById("dice5");
const dice6 = document.getElementById("dice6");

const winnerOverlay = document.getElementById("winnerOverlay");
//footer variables
const footer = document.getElementById("footer")
const playing = document.getElementById("playing");
const portfolio = document.getElementById("portfolio");
const thanks = document.getElementById("thanks");

//Opening animation and game setup
document.addEventListener("DOMContentLoaded", () => {
    welcome.style.marginTop = "5%";
    welcome.style.fontSize = "8px";
    title.style.fontSize = "28px";
    setTimeout(() => {initial()}, timeOut);
});
function initial(){
    welcome.style.display = "none";
    titleText.style.display = "none";
    fullTitleText.style.display = "block";
    wallDiv.style.display = "flex";
    wall.style.display = "flex";
    wall.style.position = "relative";
    wall.style.right = "0";
    footer.style.display = "block";
    buttons.style.display = "flex";
}

//event listeners for buttons
rollBtn.addEventListener("click", () => {
    rolling.style.display = "flex";
    setTimeout(() => {rolling.style.display = "none"}, 3000);
    let num = Math.floor(Math.random() * 6 +1);
    (num == 1)?rolled(dice1, 1):(num == 2)?rolled(dice2, 2):(num == 3)?rolled(dice3, 3):(num == 4)?rolled(dice4, 4):(num == 5)?rolled(dice5, 5):rolled(dice6, 6);
});

// resetBtn.addEventListener("click", () => {
//     console.log("Reset button hit")
//     points = 0;
//     bottleText.innerHTML = `There are ${points} green bottles standing on the wall.`;
//     console.log("Updated wall text");

//     console.log("Removed bottles")

// });
playAgainBtn.addEventListener("click", () => {
    location.reload();
});
rulesBtn.addEventListener("click", () => {
    rules.style.display = "block";
    rules.style.position = "absolute";
});
xBtn.addEventListener("click", () =>{
    rules.style.display = "none";
});

//functions
function rolled(dice, num){
    if(num == 1){
        console.log("rolled 1");
        allDice.style.display = "block";
        dice.style.display = "block";
        points = 0;
        broken.style.display = "flex";
        setTimeout(() => {dice.style.display = "none"}, timeOut);
    } else {
        console.log(`rolled ${num}`);
        allDice.style.display = "block";
        dice.style.display = "block";
        points = points + num;
        console.log(points);
        (points >= 20)?winner():addBottles(points);
        setTimeout(() => {dice.style.display = "none"}, timeOut);
    }
    bottleText.innerHTML = `There are ${points} green bottles standing on the wall.`;
    console.log("Updated wall text");
}

function addBottles(amount){
    console.log("bottles func called");
    for(let i = 0; i < amount; i++){
        const bottle = new Image();
        let num = Math.floor(Math.random() * 3 +1);
        if(num == 1){
            bottle.src = "./images/bottle1.PNG";
            bottle.height = 80;
        } else if(num == 2) {
            bottle.src = "./images/bottle2.PNG";
            bottle.height = 60;
        } else {
            bottle.src = "./images/bottle3.PNG";
            bottle.height = 75;
        };
        var newBottle = wallDiv.appendChild(bottle);
        newBottle.style.position = "absolute";
        newBottle.style.right = "0";
        let marg = 100 + i*20
        newBottle.style.marginRight = `${marg}px`;
        newBottle.style.marginTop = "10px";
        console.log(`Bottle ${i} created.`)
    }
}
function winner() {
    rulesBtn.style.display = "none";
    rollBtn.style.display = "none";
    resetBtn.style.display = "none";
    winnerOverlay.style.display = "block";
    winnerOverlay.style.position = "absolute";
}