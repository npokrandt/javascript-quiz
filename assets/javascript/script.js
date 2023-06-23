//alert("test")
  
// localStorage.setItem("questions", JSON.stringify([]))

function buildQuestion(prompt, randomize, possibleAnswers, correctAnswer){
    var question = {
        prompt: prompt,
        randomize: randomize,
        possibleAnswers: possibleAnswers,
        correctAnswer: correctAnswer
    }
    
    return question
}

//use live server to do fun storage stuff
// localStorage.clear()

//sample questions for the quiz

// structure: could be an object storing both prompt and array
// will be several of these to choose from at random

//which of the following is not a primitive data type in JS?
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

//the criteria

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score