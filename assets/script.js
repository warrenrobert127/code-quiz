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
        options2:"Bootstrap",
        option3:"Cscading Style Sheet",
        option4:"MAterialize",
        answer:3
    },
    {
        question:"What is the weather like?",
        option1:"Cascading Style express",
        options2:"Bootstrap",
        option3:"Cscading Style Sheet",
        option4:"MAterialize",
        answer:3
    },
    {
        question:"Is it supposed to rain today?",
        option1:"Cascading Style express",
        options2:"Bootstrap",
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
startQuiz.addEventListener("click", function(){
    quiz.style.display = "block"
    startQuiz.style.display = "none"
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
    if(userChoice === quizMe[currentQuestion].answer)
    {
        Result.textContent = "Correct Answer"
        userScore++;
    }else
    {
        Result.textContent = "Wrong Answer" 
    }
    if(currentQuestion < quizMe.length -1){

        currentQuestion++;
        displayQuestions()
    }else{
        console.log(userScore);
    }
}