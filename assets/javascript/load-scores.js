
// JS for the high score page
var highScoreList = document.getElementById("high-score-list")
var resetBtn = document.getElementById("reset-scores")

var highScores = JSON.parse(localStorage.getItem("highScores"))

//create the high score list
for (var i = 0; i < highScores.length; i++){
    addHighScore(highScores[i])
}

function addHighScore(highScoreObject){
    var parent = highScoreList
    var highScoreText = ''
    highScoreText += highScoreObject.name + " score: " + highScoreObject.score
    var highScore = document.createElement("li")
    highScore.setAttribute("class", "high-score-list-item")
    highScore.innerText = highScoreText
    parent.appendChild(highScore)
}

function resetScores(){
    console.log("click")
    var deleteScores = confirm("Are you sure you would like to delete all high scores?")
    if (deleteScores){
        var highScoreArray = []
        localStorage.setItem("highScores", JSON.stringify(highScoreArray))
        var scoresText = document.querySelectorAll("li")
        scoresText.forEach((element) => {
            element.innerText = ""
        });
    }
}

// event listener
resetBtn.addEventListener("click", resetScores)

