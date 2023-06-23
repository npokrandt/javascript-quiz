//the criteria

// GIVEN I am taking a code quiz - yay
// WHEN I click the start button - does nothing yet
// THEN a timer starts and I am presented with a question - don't even have a timer
// WHEN I answer a question - not there yet
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

//alert("test")
  
// localStorage.setItem("questions", JSON.stringify([]))

// function buildQuestion(prompt, randomize, possibleAnswers, correctAnswer){
//     var question = {
//         prompt: prompt,
//         randomize: randomize,
//         possibleAnswers: possibleAnswers,
//         correctAnswer: correctAnswer
//     }
    
//     return question
// }

var header = document.querySelector("h1")
var startBtn = document.getElementById("start-quiz")
var startPage = document.getElementById("start-page")
var body = document.body
var timerEl = document.getElementById("time-remaining")

var secondsLeft = 90
var timer

var questionCount = 1

// Pseudocode

//user clicks start button/restart button
    //a random question is pulled from storage
    //it is sent to the DOM
    //the timer is started

//user clicks answer option
    //if the answer is correct
        //remove old question
        //if it is the last question
            //prompt user for initials if a high score is set
            //show end game screen
        //else
            //add new question
    //else 
        //deduct time from the timer
        //inform user that the answer is wrong

function startGame(){
    console.log("Game started")
    startPage.style.display = "none"
    header.innerText = "."
    header.style.color = "lightpink"
    header.style.cursor = "default"
    timer = setInterval(tick, 1000)
    //build the question
    var question = "Which of the following is not a primitive data type in JS?"
    var options = ["boolean", "float", "symbol", "undefined"]
    buildQuestion(question, options)
}

function buildQuestion(question, answers){
    var questionDiv = document.createElement("div")
    questionDiv.className = "question-container"
    body.appendChild(questionDiv)

    var parent = document.querySelector(".question-container")

    var questionCountLabel = document.createElement("h3")
    questionCountLabel.innerHTML = "Question <span>1</span>/10"
    questionCountLabel.id = "question-count"
    parent.appendChild(questionCountLabel)

    var questionLabel = document.createElement("h4")
    questionLabel.innerText = question
    questionLabel.id = "question"
    parent.appendChild(questionLabel)

    var answerOptions = document.createElement("ol")
    answerOptions.id = "answers"
    parent.appendChild(answerOptions)

    addAnswer(answers[0], "one")
    addAnswer(answers[1], "two")
    addAnswer(answers[2], "three")
    addAnswer(answers[3], "four")

}

function addAnswer(answer, answerClass){
    var parent = document.querySelector("ol")

    var answerOption = document.createElement("li")
    answerOption.innerText = answer
    answerOption.className = answerClass
    parent.appendChild(answerOption)
}
    
function tick(){
    secondsLeft--
    timerEl.innerText = secondsLeft
    console.log(secondsLeft)
    if (secondsLeft === 0){
        clearInterval(timer)
    }
}


startBtn.addEventListener("click", startGame)
//sample questions for the quiz

// structure: could be an object storing both prompt and array
// will be several of these to choose from at random

//Which of the following is not a primitive data type in JS?
    //boolean
    //symbol
    //float
    //undefined

//which of the following isn't a keyword to declare a variable?
    //let
    //init
    //var
    //const

//which of the following is not a correct statement in a for loop in JS?
    //int i = 0;
    //i <= 17;
    //i+=7;
    //i--

//what property allows you to get the number of elements in an array?
    //amount
    //size
    //length
    //includes

//what can an object take as values?
    //strings
    //arrays
    //other objects
    //all of the above

//how does the HTML file read the JS file?
    //<script>assets/js/script.js</script>
    //<script href="assets/js/script.js"></script>
    //<link href="assets/js/script.js"></script>
    //none of the above

//what can be stored in arrays?
    //strings
    //null
    //other arrays
    //all of the above

//which is not a method of Math?
    //random()
    //ceiling()
    //abs()
    //hypot()

//which of the following is the AND operator?
    //||
    //&&
    //@@
    //??

//which variable name would work in JS?
    //user-name
    //user_name
    //1User
    //name
