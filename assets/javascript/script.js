//the criteria

// GIVEN I am taking a code quiz
// WHEN I click the start button 
// THEN a timer starts and I am presented with a question - check
// WHEN I answer a question 
// THEN I am presented with another question - coming soon
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock - pending
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over - pending
// WHEN the game is over
// THEN I can save my initials and my score - pending

// array.push(buildQuestion("How does the HTML file read the JS file?", false, ['<script>assets/js/script.js</script>', '<script href="assets/js/script.js"></script>', '<link href="assets/js/script.js"></script>', 'none of the above'], 'none of the above'))
// array.push(buildQuestion("Which variable name would work in JS?", true, ['user-name', 'user_name', '1User', '!user'], 'user_name'))
// array.push(buildQuestion("What can be stored in arrays?", false, ['strings', 'null', 'other arrays', 'all of the above'], 'all of the above'))
// array.push(buildQuestion("Which of the following is the AND operator?", true, ['||', '@@', '&&', '??'], '&&'))   
// array.push(buildQuestion("Which is not a method of Math?", true, ['random()', 'ceiling()', 'abs()', 'hypot()'], 'ceiling()'))

// function buildQuestion(prompt, randomize, possibleAnswers, correctAnswer){
//     var question = {
//         prompt: prompt,
//         randomize: randomize,
//         possibleAnswers: possibleAnswers,
//         correctAnswer: correctAnswer
//     }

//     return question
// }
// Which of the following is not a primitive data type in JS?
// boolean
// symbol
// float
// undefined

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

    
    //What can be stored in arrays?
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
    //!user
    
    
    //console.log(array.length)
    
    //array.pop()
    
    
    //console.log(array[4])
    
    // if (array === null){
        //     console.log("the array has not been added yet")
// } else {
    //     console.log("array already exists")
    // }
    
    //localStorage.setItem("questions", JSON.stringify(array))
    
    //main code starts here
    var header = document.querySelector("h1")
    var startBtn = document.getElementById("start-quiz")
    var startPage = document.getElementById("start-page")
    var questionContainer = document.getElementById("question-container")
    var endPage = document.getElementById("end-game")
    var questionCountEl = document.getElementById("question-number")
    var timerEl = document.getElementById("time-remaining")
    var array = JSON.parse(localStorage.getItem("questions"))
    
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
    questionContainer.style.display = "flex"
    //hides the header without messing with the 
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
    //console.log(secondsLeft)
    if (secondsLeft === 0){
        clearInterval(timer)
    }
}

function submitAnswer(event){
    if(event.target.matches("li")){
        var answer = event.target.getAttribute("data-correct")
        console.log(answer)
        if (answer === "true"){
            if (questionCount === 11){
                endGame()
            } else {
                buildQuestion()
            }
        } else {
            secondsLeft-=5
        }
    }
    
}

function endGame(){
    clearInterval(timer)
    questionContainer.style.display = "none"
    endPage.style.display = "block"
}


startBtn.addEventListener("click", startGame)
questionContainer.addEventListener("click", submitAnswer)
//sample questions for the quiz

// structure: could be an object storing both prompt and array
// will be several of these to choose from at random

