var timers = 100;
var timersObject;
var quizMe =[
    {
        question:"What is CSS",
        option1:"Cascading Style express",
        option2:"Bootstrap",
        option3:"Cscading Style Sheet",
        option4:"MAterialize",
        answer:3
    },
    {
        question:"What is today",
        option1:"Cascading Style express",
        option2:"Bootstrap",
        option3:"Cscading Style Sheet",
        option4:"MAterialize",
        answer:3
    },
    {
        question:"What is the weather like?",
        option1:"Cascading Style express",
        option2:"Bootstrap",
        option3:"Cscading Style Sheet",
        option4:"MAterialize",
        answer:3
    },
    {
        question:"Is it supposed to rain today?",
        option1:"Cascading Style express",
        option2:"Bootstrap",
        option3:"Cscading Style Sheet",
        option4:"MAterialize",
        answer:3
    }
]

var currentQuestion = 0;
var userScore = 0;
var quiz =document.getElementById("quiz");
quiz.style.display = "none"
var take_quiz = document.getElementById("take-quiz");
var option_1 = document.getElementById("option-1");
var option_2 = document.getElementById("option-2");
var option_3 = document.getElementById("option-3");
var option_4 = document.getElementById("option-4");
var startQuiz = document.getElementById("startQuiz");
var Result = document.getElementById("Result");
var endQuiz = document.getElementById("EndQuiz");
var score = document.getElementById("score");
var user = document.getElementById("user");
var button = document.getElementById("button");
var history = document.getElementById("history");
endQuiz.style.display = "none"

startQuiz.addEventListener("click", function(){
    quiz.style.display = "block"
    startQuiz.style.display = "none"
    timersObject = setInterval(displayTime, 1000)
    displayQuestions()
});
function displayQuestions(){
take_quiz.textContent = quizMe[currentQuestion].question
option_1.textContent = quizMe[currentQuestion].option1
option_2.textContent = quizMe[currentQuestion].option2
option_3.textContent = quizMe[currentQuestion].option3
option_4.textContent = quizMe[currentQuestion].option4
}

option_1.addEventListener("click", checkAnswer);
option_2.addEventListener("click", checkAnswer);
option_3.addEventListener("click", checkAnswer);
option_4.addEventListener("click", checkAnswer);
function checkAnswer()
{
    var userChoice = this.getAttribute("data-value");
    console.log(userChoice);
    if(userChoice == quizMe[currentQuestion].answer)
    {
        Result.textContent = "Correct Answer"
        userScore+=10;
    }else
    {
        Result.textContent = "Wrong Answer" 
        timers =timers -3;
        document.getElementById("clock").innerText = "Timer :" +timers
    }
    if(currentQuestion < quizMe.length -1){

        currentQuestion++;
        displayQuestions()
    }else{
        console.log(userScore);
        endTest();
    }
}


function endTest(){
    endQuiz.style.display = "block"
    quiz.style.display = "none"
    score.textContent = userScore + timers
    clearInterval(timersObject)
}

function displayTime(){
    document.getElementById("clock").innerText = "Timer :"+timers
    
    if(timers <= 1){
        endTest();
    }else{
        timers--;
    }
}