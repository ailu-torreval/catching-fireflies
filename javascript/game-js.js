
window.addEventListener("load", loading);

let score = 0;
let lives = 3;
let timeLeft = 90;
let isGameOver = false;

function loading() {
    console.log("loading game");
    document.querySelector("#game").classList.remove("hidden");
    document.querySelector("#blur").classList.remove("hidden");
    document.querySelector("#load-game").classList.remove("hidden");
    document.querySelector("#load-game").classList.add("glow1"); 
    document.querySelector("#load-game").addEventListener("click", start);
}

function start() {
    console.log("start");
    //hide load screen
    document.querySelector("#load-game").classList.add("hidden");
    //intro music
    document.querySelector("#intro-music-a").play();
    document.querySelector("#intro-music-a").currentTime = 0;
    //show the game and title screen
    document.querySelector("#game").classList.remove("hidden");
    document.querySelector("#title_screen").classList.remove("hidden");
    document.querySelector("#blur").classList.remove("hidden");
    document.querySelector("#intromusic-on").classList.remove("hidden");
    //add event listeners for buttons
    document.querySelector("#play").addEventListener("click", startGame);
    document.querySelector("#how-to-play").addEventListener("click", showInstructions);
    document.querySelector("#intromusic-on").addEventListener("click", introSoundOff);
}

function introSoundOff() {
    console.log("stop INTRO music");
    //show the off button
    document.querySelector("#intromusic-on").classList.add("hidden");
    document.querySelector("#intromusic-off").classList.remove("hidden");
    //stop music
    document.querySelector("#intro-music-a").pause();
    //make it clickable again
    document.querySelector("#intromusic-off").addEventListener("click", introSoundOn);
}

function introSoundOn() {
    console.log("restartINTRO music");
    document.querySelector("#intromusic-off").classList.add("hidden");
    document.querySelector("#intromusic-on").classList.remove("hidden");
    document.querySelector("#intro-music-a").play();
    document.querySelector("#intromusic-on").addEventListener("click", introSoundOff);
}

function showInstructions() {
    //hide titles
    document.querySelector("#title_screen").classList.add("hidden");
    //show instructions
    document.querySelector("#instructions").classList.remove("hidden");
    document.querySelector("#intro-music-on").classList.remove("hidden");
    //add event listener for buttons
    document.querySelector("#lets-play").addEventListener("click", startGame);
    document.querySelector("#intro-music-on").addEventListener("click", instructionsSoundOff);
    document.querySelector("#close-button").addEventListener("click", closeInstructions);

}
function closeInstructions() {
    console.log("closeInstructions");
    document.querySelector("#instructions").classList.add("hidden");
    document.querySelector("#intro-music-on").classList.add("hidden");
    document.querySelector("#intro-music-off").classList.add("hidden");
    document.querySelector("#title_screen").classList.remove("hidden");
    document.querySelector("#intromusic-on").classList.remove("hidden");

}

function instructionsSoundOff() {
    console.log("stop INSTRUCTIONS music");
    //show the off button
    document.querySelector("#intro-music-on").classList.add("hidden");
    document.querySelector("#intro-music-off").classList.remove("hidden");
    //stop music
    document.querySelector("#intro-music-a").pause();
    //make it clickable again
    document.querySelector("#intro-music-off").addEventListener("click", instructionsSoundOn);
}

function instructionsSoundOn() {
    console.log("restart INSTRUCTIONS music");
    document.querySelector("#intro-music-off").classList.add("hidden");
    document.querySelector("#intro-music-on").classList.remove("hidden");
    document.querySelector("#intro-music-a").play();
    document.querySelector("#intro-music-on").addEventListener("click", instructionsSoundOff);
}

function restartGame() {
    console.log("restart Game");
        // //set all variables again
        isGameOver = false;
        score = 0;
        lives = 3;
        timeLeft = 0;
        document.querySelector("#scoreboard").textContent=score;
        document.querySelector("#score_board").classList=""; 
        document.querySelector("#score_board").classList.add("scoreBar0");
        console.log("score is" + score);
        console.log("you have" + lives + "remaining");
        //hide settings window
        document.querySelector("#sound-on").classList.add("hidden");
        document.querySelector("#sound-off").classList.add("hidden");
        document.querySelector("#music-on").classList.add("hidden");
        document.querySelector("#music-off").classList.add("hidden");
        //turn off music from toher games
        document.querySelector("#game-over-sound1").pause();
        document.querySelector("#time-over-sound1").pause();
        startGame();

}
function startGame() {
    console.log("startGame");
    timeLeft = 90;
    //stop intro music and start game music
    document.querySelector("#intro-music-a").pause();
    document.querySelector("#intro-music1").play();
    document.querySelector("#intro-music1").currentTime = 0;
    //hide all screens
    document.querySelector("#title_screen").classList.add("hidden");
    document.querySelector("#instructions").classList.add("hidden");
    document.querySelector("#win_game").classList.add("hidden");
    document.querySelector("#game_over").classList.add("hidden");
    document.querySelector("#time_over").classList.add("hidden");
    //un-blur background
    document.querySelector("#blur").classList.add("hidden");
    //un-hide foreground
    document.querySelector("#game_foreground").classList.remove("hidden");
    //un-hide settings
    document.querySelector("#settings").classList.remove("hidden");
    //start all animations
    document.querySelector("#a_container1").classList.add("position1");
    document.querySelector("#a_container1").classList.add("moveLeft1");
    document.querySelector("#a_container2").classList.add("position4");
    document.querySelector("#a_container2").classList.add("moveLeft2");
    document.querySelector("#a_container3").classList.add("position5");
    document.querySelector("#a_container3").classList.add("moveLeft2");
    document.querySelector("#ghost").classList.add("position2");
    document.querySelector("#ghost").classList.add("moveLeft1");
    document.querySelector("#ghost2").classList.add("position5");
    document.querySelector("#ghost2").classList.add("moveLeft1");
    document.querySelector("#ghost3").classList.add("position6");
    document.querySelector("#ghost3").classList.add("moveLeft1");
    document.querySelector("#potion").classList.add("position3");
    document.querySelector("#potion").classList.add("moveLeft1");
    //add event listener click
    document.querySelector("#a_container1").addEventListener("click", clickFirefly);
    document.querySelector("#a_container2").addEventListener("click", clickFirefly);
    document.querySelector("#a_container3").addEventListener("click", clickFirefly);
    document.querySelector("#ghost").addEventListener("click", clickGhost);
    document.querySelector("#ghost2").addEventListener("click", clickGhost);
    document.querySelector("#ghost3").addEventListener("click", clickGhost);
    document.querySelector("#potion").addEventListener("click", clickPotion);
    //add event listener click for settings button
    document.querySelector("#settings").addEventListener("click", clickSettings);
    //show score bar
    document.querySelector("#score_board").classList.add("scoreBar" + score);
    //show lives bar
    document.querySelector("#health_board").classList.add("lives" + lives);
    //start the timer
    showTime();
    //addEventListener animationiteration
    document.querySelector("#a_container1").addEventListener("animationiteration", restartFirefly);
    document.querySelector("#a_container2").addEventListener("animationiteration", restartFirefly);
    document.querySelector("#a_container3").addEventListener("animationiteration", restartFirefly);
    document.querySelector("#ghost").addEventListener("animationiteration", restartGhost);
    document.querySelector("#ghost2").addEventListener("animationiteration", restartGhost);
    document.querySelector("#ghost3").addEventListener("animationiteration", restartGhost);
    document.querySelector("#potion").addEventListener("animationiteration", restartPotion);

}

function clickSettings() {
    console.log("settings");
    // document.querySelector("#settings").addEventListener("click", unClickSettings);
    //display settings menu (music on, sound on, restart game)
    document.querySelector("#music-on").classList.remove("hidden");
    document.querySelector("#sound-on").classList.remove("hidden"); 
    // add event listeners to click all buttons
    document.querySelector("#music-on").addEventListener("click", musicOff);
    document.querySelector("#sound-on").addEventListener("click", soundOff);
    // document.querySelector("#settings").addEventListener("click", closeSettings);
    //change buttons when on or off
}

// function closeSettings() {
//     console.log("closeSettings");
//     document.querySelector("#music-on").classList.add("hidden");
//     document.querySelector("#music-off").classList.add("hidden");
//     document.querySelector("#sound-on").classList.add("hidden");
//     document.querySelector("#sound-off").classList.add("hidden");
//     document.querySelector("#settings").addEventListener("click", clickSettings);
// }

function musicOff() {
    console.log("stopMusic");
    //change button
    document.querySelector("#music-on").classList.add("hidden");
    document.querySelector("#music-off").classList.remove("hidden");
    //turn off the music
    document.querySelector("#intro-music1").pause();
    //add event listener for turning the music on again
    document.querySelector("#music-off").addEventListener("click", musicOn);
}
function musicOn() { 
    console.log("music-on");
    document.querySelector("#music-off").classList.add("hidden");
    document.querySelector("#music-on").classList.remove("hidden");
    document.querySelector("#intro-music1").play();
    document.querySelector("#music-on").addEventListener("click", musicOff);
}

function soundOff() {
    console.log("stopsound");
    //change button
    document.querySelector("#sound-on").classList.add("hidden");
    document.querySelector("#sound-off").classList.remove("hidden");
    //turn the sound off
    document.querySelector("#firefly-sound").muted = true;
    document.querySelector("#ghost-sound").muted = true;
    document.querySelector("#potion-sound").muted = true;
    //add event listener for turning the music on again
    document.querySelector("#sound-off").addEventListener("click", soundOn);
}
function soundOn() {
    console.log("sound-on");
    document.querySelector("#sound-off").classList.add("hidden");
    document.querySelector("#sound-on").classList.remove("hidden");
    document.querySelector("#firefly-sound").muted = false;
    document.querySelector("#ghost-sound").muted = false;
    document.querySelector("#potion-sound").muted = false;
    document.querySelector("#sound-on").addEventListener("click", soundOff);
}

function clickPotion() {
    console.log("clickPotion");
    //make only one click possible
    document.querySelector("#potion").removeEventListener("click", clickPotion);
    //pause animation
    document.querySelector("#potion").classList.add("paused");
    //add sound ONLY if the sound is on
    document.querySelector("#potion-sound").play();
    //rotates- fade out
    document.querySelector("#potion_sprite").classList.add("potion-dissapear");
    //gives 1 life (max lives= 3)
    if (lives <= 2) {
        lives ++;
    }
    //print life in ui
    document.querySelector("#lives").textContent=lives;
    // show lives with img
    document.querySelector("#health_board").classList="";
    document.querySelector("#health_board").classList.add("lives" + lives);
    //restarts the sprite
    document.querySelector("#potion").addEventListener("animationend", restartPotion);
}

function restartPotion() {
    console.log("restartPotion");
    document.querySelector("#potion").addEventListener("click", clickPotion);
    document.querySelector("#potion").classList="";
    document.querySelector("#potion_sprite").classList="";

    document.querySelector("#potion").offsetHeight;
    
    //random number  
    let rndPos = generateRandomNumber(6);
    let rndMove = generateRandomNumber(3)
   //  console.log("random number" + rndNumber);
   document.querySelector("#potion").classList.add("position" + rndPos);
   document.querySelector("#potion").classList.add("moveLeft" + rndMove);
}

function clickGhost() {
    console.log("clickGhost");
    //make onliy one click possible
    this.removeEventListener("click", clickGhost);
    //pause animation
    this.classList.add("paused");
    //add bad sound ONLY if the sound is on
    document.querySelector("#ghost-sound").play();
    //fades out/ go upwards
    this.firstElementChild.classList.add("ghost-dissapear");
    //lose 1 life
    lives = lives - 1;
    //print it on ui
    document.querySelector("#lives").textContent=lives;
    //take live from livesBar
    document.querySelector("#health_board").classList="";
    document.querySelector("#health_board").classList.add("lives" + lives);
    //restart the sprite
    this.firstElementChild.addEventListener("animationend", restartGhostSpr);
    //if lives are 0 --> game over
    if (lives <= 0) {
        gameOver();
    }
}

function restartGhost() {
    // console.log("restartGhost" + this);
    //  to make the clicking possible again
    this.addEventListener("click", clickGhost);
    this.classList="";
    this.firstElementChild.classList="";

    this.offsetHeight;
   
    //random number
    let rndPos = generateRandomNumber(6);
    let rndMove = generateRandomNumber(3)
   this.classList.add("position" + rndPos);
   this.classList.add("moveLeft" + rndMove);
}
function restartGhostSpr() {
    console.log("restartghost sprite"); 
    // console.log(this);
    //to make the clicking possible again
    this.parentElement.addEventListener("click", clickGhost);
    this.parentElement.classList= "";
    this.classList= "";

    this.offsetHeight;

    //random number
    let rndPos = generateRandomNumber(6);
    let rndMove = generateRandomNumber(3)
   //  console.log("random number" + rndNumber);
   this.parentElement.classList.add("position" + rndPos);
   this.parentElement.classList.add("moveLeft" + rndMove);
}

 function clickFirefly() {
     console.log("clickFirefly");
     //make only one click possible
     this.removeEventListener("click", clickFirefly);
          //pause animation
     this.classList.add("paused");
     //glow
     this.firstElementChild.classList.add("firefly-glow");
    //add happy sound
    document.querySelector("#firefly-sound").play();
    //gives 1 point
     score++;
    //print point in ui
     document.querySelector("#scoreboard").textContent=score;
     //add point in score bar 
     document.querySelector("#score_board").classList.add("scoreBar" + score);
     console.log("score is now" + score);
     //fade out
     //restart the sprite
     this.firstElementChild.addEventListener("animationend", restartFireflySpr);
     //if score gets 20 --> win game
     if (score === 20) {
         winGame();
     }
 }

 function restartFirefly() {
     console.log("restartFirefly"); 
    //  console.log(this);
     //to make the clicking possible again
     this.addEventListener("click", clickFirefly);
     this.classList= "";
     this.firstElementChild.classList= "";

     this.offsetHeight;

     //random number
     let rndPos = generateRandomNumber(6);
     let rndMove = generateRandomNumber(3)
    //  console.log("random number" + rndNumber);
    this.classList.add("position" + rndPos);
    this.classList.add("moveLeft" + rndMove);
 }

 function restartFireflySpr() {
    console.log("restartFirefly"); 
    // console.log(this);
    //to make the clicking possible again
    this.parentElement.addEventListener("click", clickFirefly);
    this.parentElement.classList= "";
    this.classList= "";

    this.offsetHeight;

    //random number
    let rndPos = generateRandomNumber(6);
    let rndMove = generateRandomNumber(3)
   //  console.log("random number" + rndNumber);
   this.parentElement.classList.add("position" + rndPos);
   this.parentElement.classList.add("moveLeft" + rndMove);
}

function winGame() {
    console.log("winGame");
    isGameOver = true;
    //stop all animations and event listeners
    document.querySelector("#a_container1").classList="";   
    document.querySelector("#a_container2").classList="";
    document.querySelector("#a_container3").classList="";     
    document.querySelector("#ghost").classList="";
    document.querySelector("#ghost2").classList="";
    document.querySelector("#ghost3").classList="";
    document.querySelector("#potion").classList="";
    document.querySelector("#a_container1").removeEventListener("click", clickFirefly);
    document.querySelector("#a_container2").removeEventListener("click", clickFirefly);
    document.querySelector("#a_container3").removeEventListener("click", clickFirefly);
    document.querySelector("#ghost").removeEventListener("click", clickGhost);
    document.querySelector("#ghost2").removeEventListener("click", clickGhost);
    document.querySelector("#ghost3").removeEventListener("click", clickGhost);
    document.querySelector("#potion").removeEventListener("click", clickPotion);
    document.querySelector("#a_sprite1").removeEventListener("animationend", restartFireflySpr);
    document.querySelector("#a_sprite2").removeEventListener("animationend", restartFireflySpr);
    document.querySelector("#a_sprite3").removeEventListener("animationend", restartFireflySpr);
    document.querySelector("#ghost_sprite").removeEventListener("animationend", restartGhost);
    document.querySelector("#ghost_sprite2").removeEventListener("animationend", restartGhost);
    document.querySelector("#ghost_sprite3").removeEventListener("animationend", restartGhost);
    document.querySelector("#potion_sprite").removeEventListener("animationend", restartPotion);
    //stop music
    document.querySelector("#intro-music1").pause();
    //play win sound
    document.querySelector("#win-sound1").play();
    //blur background
    document.querySelector("#blur").classList.remove("hidden");
    //show win screen
    document.querySelector("#win_game").classList.remove("hidden");
    //add event listener to play again button
    document.querySelector("#play-again").addEventListener("click", restartGame);



}

 function gameOver() {
    console.log("Game Over");
    //stop music
    document.querySelector("#intro-music1").pause();
    //play gameover sound
    //show game over screen
    //blur background
    isGameOver = true;
    document.querySelector("#blur").classList.remove("hidden");

    //stop animations and eventListeners
    document.querySelector("#a_container1").classList="";   
    document.querySelector("#a_container2").classList="";
    document.querySelector("#a_container3").classList="";
    document.querySelector("#ghost").classList="";
    document.querySelector("#ghost2").classList="";
    document.querySelector("#ghost3").classList="";
    document.querySelector("#potion").classList="";
    document.querySelector("#a_container1").removeEventListener("click", clickFirefly);
    document.querySelector("#a_container2").removeEventListener("click", clickFirefly);
    document.querySelector("#a_container3").removeEventListener("click", clickFirefly);
    document.querySelector("#ghost").removeEventListener("click", clickGhost);
    document.querySelector("#ghost2").removeEventListener("click", clickGhost);
    document.querySelector("#ghost3").removeEventListener("click", clickGhost);
    document.querySelector("#potion").removeEventListener("click", clickPotion);
    document.querySelector("#a_sprite1").removeEventListener("animationend", restartFireflySpr);
    document.querySelector("#a_sprite2").removeEventListener("animationend", restartFireflySpr);
    document.querySelector("#a_sprite3").removeEventListener("animationend", restartFireflySpr);
    document.querySelector("#ghost_sprite").removeEventListener("animationend", restartGhostSpr);
    document.querySelector("#ghost_sprite2").removeEventListener("animationend", restartGhostSpr);
    document.querySelector("#ghost_sprite3").removeEventListener("animationend", restartGhostSpr);
    document.querySelector("#potion_sprite").removeEventListener("animationend", restartPotion);
    //show the game over or time over screen
    if(timeLeft <= 0) {
        document.querySelector("#time_over").classList.remove("hidden");
        document.querySelector("#time-over-sound1").play();
        document.querySelector("#time-over-sound1").currentTime = 0;
    } else {
        document.querySelector("#game_over").classList.remove("hidden");
        document.querySelector("#game-over-sound1").play();
        document.querySelector("#game-over-sound1").currentTime = 0;
    }
    //stop timer
    //add event listener to play again buttons
    document.querySelector("#try_again").addEventListener("click", restartGame);
    document.querySelector("#try-again").addEventListener("click", restartGame);

 }

 function generateRandomNumber(number) {
    //  console.log("generate random number");
     return Math.floor(Math.random() * number) + 1;
 }

 function showTime() {
    //  console.log("showTime");
     timeLeft--;
     document.querySelector("#time_board").textContent = timeLeft;
     startTime();

 }
 function startTime() {
    //  console.log("startTime");
    if(isGameOver === true) {
        return;
    } 

     if(timeLeft > 0) {
         setTimeout(showTime, 1000);
     } else {
         gameOver();
     }
 }
