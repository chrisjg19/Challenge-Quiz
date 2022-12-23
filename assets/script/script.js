var startBtnEl = document.getElementById("startBtn");
var nextBtnEl = document.getElementById("nextBtn");
var timerEl = document.getElementById("timer");
var questionsEl = document.getElementById("questionBox");
var questionArray = [
    {
        question: "What is the answer to life?",
        choices: [
            { text: "Live, love, laugh", correct: false },
            { text: "The answer is objective", correct: false },
            { text: "42", correct: true },
            { text: "Not sure", correct: false },
        ],

    },
    {
        question: "What goes up but doesn't come down?",
        choices: [
            { text: "Money", correct: false },
            { text: "Age", correct: true },
            { text: "Not sure", correct: false },
            { text: "Water", correct: false },
        ],

    },
    {
        question: "What is 9 + 10?",
        choices: [
            { text: "87", correct: false },
            { text: "21", correct: true },
            { text: "42", correct: false },
            { text: "19", correct: false },
        ],
    },
    {
        question: "What is the best burger place?",
        choices: [
            { text: "Whataburger", correct: true },
            { text: "McDonald's", correct: false },
            { text: "Burger King", correct: false },
            { text: "Chick-fil-a", correct: false },
        ],

    },
];


var currentQuestionIndex = 0;
var score = 0;
var timerCount = 100;
var timerObj;

function displayQuestion() {
    var question = questionArray[currentQuestionIndex];
    questionsEl.innerHTML = "";
    questionsEl.innerHTML += "<p>" + question.question + "</p>";
    for (var i = 0; i < question.choices.length; i++) {
        questionsEl.innerHTML += `<button data-value= ${question.choices[i].correct} class='btn'> ${question.choices[i].text} </button>`;
    }
}
function selectChoice(event) {

    if (event.target.matches(".btn")) {

        var choice = event.target;
        console.log(choice, choice.getAttribute("data-value"))
        if (choice.getAttribute("data-value") === "true") {

            alert("Correct!");
            score += 10;
        } else {
            timerCount -= 5;
            alert("Incorrect!");
        }

        currentQuestionIndex++;

        if (currentQuestionIndex >= questionArray.length) {
            alert("Quiz complete!");
            finalTime()
        } else {
            displayQuestion();
        }
    }
}

questionsEl.addEventListener("click", selectChoice);

function finalTime() {
    clearInterval(timerObj);
    currentQuestionIndex = 0;
    questionsEl.classList.add("hide")
    nextBtnEl.classList.remove("hide")
    document.getElementById("score").innerText = (score + timerCount)
}

startBtnEl.addEventListener("click", function () {
    timerObj = setInterval(function () {
        timerEl.innerText = timerCount;
        if (timerCount > 1) {
            timerCount--;
        } else {
            alert("Running out of Time!!!")
            finalTime()
        }
    }, 1000)
    displayQuestion();
    questionsEl.classList.remove("hide");
    startBtnEl.classList.add("hide");
    nextBtnEl.classList.add("hide")
});

document.getElementById("save").addEventListener("click", function () {
  var user = {
    user:document.getElementById("user").value,
    score:(score+timerCount)
  }
  var highscores = JSON.parse(localStorage.getItem("codequiz")) || []
  highscores.push(user)
  localStorage.setItem("codequiz",JSON.stringify(highscores))
  nextBtnEl.classList.add("hide")
});

document.getElementById("restart").addEventListener("click",function(){
    location.reload()
})