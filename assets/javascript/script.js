
//adds the quiz to local storage if it isn't already there
var array = JSON.parse(localStorage.getItem("questions"))
if (array == null){
    array = []
    array.push(buildQuizQuestion("Which of the following is not a primitive data type in JS?", true, ['boolean', 'float', 'symbol', 'undefined'], 'float'))
    
    array.push(buildQuizQuestion("Which of the following isn't a keyword to declare a variable?", true, ['let', 'init', 'var', 'const'], 'init'))
    
    array.push(buildQuizQuestion("Which of the following is not a correct statement in a for loop in JS?", true, ['int i = 0;', 'i <= 17;', 'i+=7;', 'i--'], 'int i = 0;'))
    
    array.push(buildQuizQuestion("What property allows you to get the number of elements in an array?", true, ['amount', 'size', 'length', 'includes'], 'length'))

   array.push(buildQuizQuestion("What can an object take as values?", false, ['strings', 'arrays', 'other objects', 'all of the above'], 'all of the above'))
   
   array.push(buildQuizQuestion("How does the HTML file read the JS file?", false, ['<script>assets/js/script.js</script>', '<script href="assets/js/script.js"></script>', '<link href="assets/js/script.js"></script>', 'none of the above'], 'none of the above'))
   
   array.push(buildQuizQuestion("What can be stored in arrays?", false, ['strings', 'null', 'other arrays', 'all of the above'], 'all of the above'))
     
   array.push(buildQuizQuestion("Which is not a method of Math?", true, ['random()', 'ceiling()', 'abs()', 'hypot()'], 'ceiling()'))

   array.push(buildQuizQuestion("What is the AND operator in JS??", true, ['||', '&&', '@@', '??'], '&&'))

   array.push(buildQuizQuestion("Which variable name would work in JS?", true, ['user-name', 'user_name', '1User', '!user'], 'user_name'))

   localStorage.setItem("questions", JSON.stringify(array))
} else {
    console.log("quiz already exists")
}

var highScoreArray = JSON.parse(localStorage.getItem("highScores"))
if (highScoreArray == null){
    highScoreArray = []
    localStorage.setItem("highScores", JSON.stringify(highScoreArray))
}

function buildQuizQuestion(prompt, randomize, possibleAnswers, correctAnswer){
    var question = {
        prompt: prompt,
        randomize: randomize,
        possibleAnswers: possibleAnswers,
        correctAnswer: correctAnswer
    }

    return question
}
    
//global variables
var header = document.querySelector("h1")
var startBtn = document.getElementById("start-quiz")
var PlayAgainBtn = document.getElementById("restart-game-button")
var startPage = document.getElementById("start-page")
var highScoresLink = document.getElementById("high-scores-link")
var questionContainer = document.getElementById("question-container")
var endPage = document.getElementById("end-game")
var questionCountEl = document.getElementById("question-number")
var timerEl = document.getElementById("time-remaining")
var array = JSON.parse(localStorage.getItem("questions"))
    
var secondsLeft = 90
var timer
    
var questionCount = 1
            
//functions of the quiz
function startGame(){
    console.log("Game started")
    startPage.style.display = "none"
    highScoresLink.style.display = "none"
    questionContainer.style.display = "flex"
    //hides the header without messing with the positioning
    header.innerText = "."
    header.style.color = "lightpink"
    header.style.cursor = "default"
    timer = setInterval(tick, 1000)
    //build the question
    buildQuestion()
}
            
function buildQuestion(){

    questionCountEl.innerText = questionCount
    //the question elements
    var question = JSON.parse(localStorage.getItem("questions"))
    var questionPrompt = question[questionCount - 1].prompt
    var options = question[questionCount - 1].possibleAnswers
    var correctAnswer = question[questionCount - 1].correctAnswer
      
    var questionPromptEl = document.getElementById("question")
    
    questionPromptEl.innerText = questionPrompt

    for (var i = 0; i < 4; i++){
        var listItem = document.getElementById(JSON.stringify(i + 1))
           
        listItem.innerText = options[i]
        if (options[i] === correctAnswer){
            listItem.setAttribute("data-correct", "true")
        } else {
            listItem.setAttribute("data-correct", "false")
        }
    }
    questionCount++
}

function tick(){
    secondsLeft--
    timerEl.innerText = secondsLeft
    if (secondsLeft <= 0){
        clearInterval(timer)
        timerEl.innerText = 0
        secondsLeft = 0
        endGame()
    }
}

function submitAnswer(event){
    if(event.target.matches("li")){
        var answer = event.target.getAttribute("data-correct")
        if (answer === "true"){
            if (questionCount === 11){
                endGame()
            } else {
                buildQuestion()
            }
        } else {
            secondsLeft-=5
            timerEl.innerText = secondsLeft
        }
    }
    
}

function endGame(){
    questionContainer.style.display = "none"
    endPage.style.display = "block"
    highScoresLink.style.display = "inline"
    var score = document.getElementById("score-span")
    var quizEndMessage = document.getElementById("quiz-over")
    score.innerText = secondsLeft
    if (secondsLeft === 0){
        console.log("you lose!")
        quizEndMessage.innerText = "You lose! Better luck next time!"
        quizEndMessage.style.color = "red"
        //you lose
    } else {
        quizEndMessage.innerText = "You win! Congratulations!"
        quizEndMessage.style.color = "green"
        //you win! Add high score
        var highScoreInitials = prompt("You set a new high score! Enter your intials below: ", "JDD")
        var highScoreObject = {
            name: highScoreInitials,
            score: secondsLeft
        }
        var highScoreArray = JSON.parse(localStorage.getItem("highScores"))
        highScoreArray.push(highScoreObject)
        localStorage.setItem("highScores", JSON.stringify(highScoreArray))
        console.log(highScoreArray) 
    }
    clearInterval(timer)
    secondsLeft = 90
    timerEl.innerText = secondsLeft
}

function restartGame(){
    endPage.style.display = "none"
    highScoresLink.style.display = "none"
    questionContainer.style.display = "flex"
    questionCount = 1
    timer = setInterval(tick, 1000)
    buildQuestion()
}

//event listeners
startBtn.addEventListener("click", startGame)
PlayAgainBtn.addEventListener("click", restartGame)
questionContainer.addEventListener("click", submitAnswer)

