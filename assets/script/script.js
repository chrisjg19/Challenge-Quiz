var startBtnEl = document.getElementById("startBtn");
var nextBtnEl = document.getElementById("nextBtn");
var questionsEl = document.getElementById("questionBox");
var questionArray = [
  {
    question: "What is the answer to life?",
    choices: [
      {text: "Live, love, laugh", correct: false},
      {text: "The answer is objective", correct: false},
      {text: "42", correct: true},
      {text: "Not sure", correct: false},
      ],
  
  },
  {
    question: "What goes up but doesn't come down?",
    choices: [
      {text: "Money", correct: false},
      {text: "Age", correct: true},
      {text: "Not sure", correct: false},
      {text: "Water", correct:false},
    ],
  
  },
  {
    question: "What is 9 + 10?",
    choices: [
     {text: "87", correct: false},
     {text: "21", correct: true},
     {text: "42", correct: false},
    {text: "19", correct: false},
    ],
  },
  {
    question: "What is the best burger place?",
    choices: [
     {text : "Whataburger", correct: true},
     {text : "McDonald's", correct: false},
     {text: "Burger King", correct: false},
     {text: "Chick-fil-a", correct: false},
    ],
    
  },
];


var currentQuestionIndex = 0;


function displayQuestion() {
  var question = questionArray[currentQuestionIndex];
  questionsEl.innerHTML = "";
  questionsEl.innerHTML += "<p>" + question.question + "</p>";
  for (var i = 0; i < question.choices.length; i++) {
    questionsEl.innerHTML += "<button  class='btn'>" + question.choices[i].text + "</button>";
  }
}
function selectChoice(event) {

  if (event.target.matches(".btn")) {
    
    var choice = event.target;
    console.log(choice)
    if (questionArray[currentQuestionIndex].choices[choice.dataset.index].correct) {
      
      alert("Correct!");
    } else {
      
      alert("Incorrect!");
    }
    
    currentQuestionIndex++;
   
    if (currentQuestionIndex >= questionArray.length) {
      alert("Quiz complete!");
      currentQuestionIndex = 0;
    } else {
      displayQuestion();
    }
  }
}

questionsEl.addEventListener("click", selectChoice);

startBtnEl.addEventListener("click", function() {
  displayQuestion();
  questionsEl.classList.remove("hide");
  startBtnEl.classList.add("hide");
});

nextBtnEl.addEventListener("click", function() {
  currentQuestionIndex++;
  if (currentQuestionIndex >= questionArray.length) {
    alert("Quiz complete!");
    currentQuestionIndex = 0;
  } else {
    displayQuestion();
  }
});