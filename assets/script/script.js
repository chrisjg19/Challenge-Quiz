var startBtnEl = document.getElementById("startBtn");
var nextBtnEl = document.getElementById("nextBtn");
var questionsEl = document.getElementById("questionBox");
var questionArray = [
    {
        question: "What is the answer to life",
        choices: {
            1:"Live,love,laugh",
            2:"The answer is objective",
            3:"42",
            4:"Not Sure",
        },
        answer: {3:"42"},

        
    },
    {
        question: "What goes up but doesnt come down?",
        choices: {
            1:"Money",
            2:"Age",
            3:"Not Sure",
            4:"Water",
        },
        answer: { 2:"Age"},

    },
    {
        question: "What is 9 + 10 ",
        choices: {
            1:"87",
            2:"21",
            3:"42",
            4:"19",
        },
        answer: {2:"21"},

    },
    {
        question: "What is the best Burger Place",
        choices: {
            1:"Whataburger",
            2:"McDonalds",
            3:"Burger King",
            4:"Chick-fil-a",
        },
        answer: {1:"Whataburger"},

    },
];

var currentQuestionIndex = 0;
var correctAnswers = 0;
var selectedAnswers = [];
var questionLength = questionArray.length;

function startQuiz() {
    startBtnEl.classList.add("hide");
    questionsEl.classList.remove("hide");
    displayQuestion(currentQuestionIndex);
}


console.log(startQuiz)
