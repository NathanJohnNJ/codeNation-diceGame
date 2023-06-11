// const timeOut = 5000;
const timeOut = 6000;

//opening/title
const welcome = document.getElementById("welcome");
const title = document.getElementById("title");
const titleText = document.getElementById("splitTitle");
const fullTitleText = document.getElementById("titleText");

//scorecard
const wallDiv = document.getElementById("wallDiv");
const wall = document.getElementById("wall");
const leftWallDiv = document.getElementById("leftWallDiv");
const leftWall = document.getElementById("leftWall");
//bottles
const bottle1 = document.getElementById("bottle1");
const bottle2 = document.getElementById("bottle2");
const bottle3 = document.getElementById("bottle3");
const broken = document.getElementById("broken");
const bottles = [bottle1, bottle2, bottle3];
const bottleText = document.getElementById("bottleText");
let totalBottles = 0;
const redBottle1 = document.getElementById("redBottle1");
const redBottle2 = document.getElementById("redBottle2");
const redBottle3 = document.getElementById("redBottle3");
const redBroken = document.getElementById("redBroken");
const redBottles = [redBottle1, redBottle2, redBottle3];
const leftBottleText = document.getElementById("leftBottleText");
let totalRedBottles = 0;
//game variable
const mainGame = document.getElementById("mainGame");
const buttons = document.getElementById("buttons");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");
const playAgainBtn  = document.getElementById("playAgainBtn");
const rulesBtn  = document.getElementById("rulesBtn");
const xBtn  = document.getElementById("xBtn");
let points = 0;

//dice variables
const board = document.getElementById("board");
const allDice  = document.getElementById("dice");
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
    footer.style.visibility = "visible";
    board.style.display = "block";
    buttons.style.display = "flex";
}

//event listeners for buttons
rollBtn.addEventListener("click", () => {
    broken.style.display = "none";
    let num = Math.floor(Math.random() * 6 +1);
    (num == 1)?rolled(dice1, 1):(num == 2)?rolled(dice2, 2):(num == 3)?rolled(dice3, 3):(num == 4)?rolled(dice4, 4):(num == 5)?rolled(dice5, 5):rolled(dice6, 6);
});

resetBtn.addEventListener("click", () => {
    location.reload();
});
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
    allDice.style.display = "block";
    dice.style.display = "block";
    if(num == 1){
        console.log("rolled 1");
        points = 0;
        setTimeout(() => {rmBottles();  bottleText.innerHTML = `...And if 1 green bottle should accidentally fall, THEY ALL FALL`; broken.style.display = "flex"}, 3200);
    } else {
        setTimeout(() => {showBottles(num)}, 3200);
    }
    setTimeout(() => {bottleText.innerHTML = `${points} green bottles standing on the wall. And if 1 green bottle should accidentally fall...`;
    console.log("Updated wall text")}, 3200);
    setTimeout(() => {dice.style.display = "none"}, timeOut);
}
function showBottles(num){
    console.log(`rolled ${num}`);
        points = points + num;
        console.log(points);
        (points >= 20)?winner(points):addBottles(points);
}
function addBottles(amount){
    console.log("bottles func called");
    for(let i = 0; i < amount-totalBottles; i++){
        const bottle = new Image();
        let num = Math.floor(Math.random() * 3 +1);
        if(num == 1){
            bottle.src = "./images/bottle1.PNG";
            bottle.height = 80;
            bottle.width = 15;
            var topMargin = "10px";
        } else if(num == 2) {
            bottle.src = "./images/bottle2.PNG";
            bottle.height = 60;
            bottle.width = 15;
            var topMargin = "30px";
        } else {
            bottle.src = "./images/bottle3.PNG";
            bottle.height = 75;
            bottle.width = 15;
            var topMargin = "15px";
        };
        var newBottle = wallDiv.appendChild(bottle);
        newBottle.style.position = "absolute";
        newBottle.style.right = "0";
        newBottle.setAttribute('class', 'newBottle');
        let marg = totalBottles*10 + 45 + i*10;
        newBottle.style.marginRight = `${marg}px`;
        newBottle.style.marginTop = topMargin;
        console.log(`Bottle ${i} created.`)
    }
    totalBottles = totalBottles + amount
}
function winner(points) {
    addBottles(points)
    rulesBtn.style.display = "none";
    rollBtn.style.display = "none";
    resetBtn.style.display = "none";
    winnerOverlay.style.display = "block";
    winnerOverlay.style.position = "absolute";
    footer.style.marginTop = "4%";
    // setTimeout(() => {footer.style.marginTop = "100%"}, 3000);
}
function rmBottles(){
    let bot = document.getElementsByClassName(newBottle);
    console.log(bot)
    for(let i = 0; i<totalBottles; i++){
        wallDiv.removeChild(bot);
    }
}