/*
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
// create questions here
var questions = [
    new Question("What type of practice do you have?", ["Clinic", "Small Business","Shared Practice", "Hospital"], "Hospital"),
    new Question("What services do you need most?", ["Video Servicing and Scheduling", "Automatic Messaging and Direct Chat Line", "Medical Record Database and Analytics", "All of the Above"], "CSS"),,
    new Question("On average how many patients do you see each day?", ["0-20", "20-40","40-100", "100+"], "100+"),
    new Question("What is your price range (per year)?", ["Less than $300", "Less than $400", "Less than $500", "Less than $600"], "Less than $600"),
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();
-->
*/
const questions = [
  {
    "question": "On average, what is your monthly electric bill?",
    "answer1": "Less than $50",
    "answer1Total": "2625",
    "answer2": "$50 to $100",
    "answer2Total": "7875",
    "answer3": "$101 to $150",
    "answer3Total": "13125",
    "answer4": "$151 to 200",
    "answer4Total": "18375",
    "answer5": "More than $200",
    "answer5Total": "26250"
  },
  {
    "question": "On average, what is your monthly gas bill?",
    "answer1": "Less than $50",
    "answer1Total": "2625",
    "answer2": "$50 to $100",
    "answer2Total": "7875",
    "answer3": "$101 to $150",
    "answer3Total": "13125",
    "answer4": "$151 to 200",
    "answer4Total": "18375",
    "answer5": "More than $200",
    "answer5Total": "26250"
  },
  {
    "question": "On average, what is your monthly oil bill?",
    "answer1": "Less than $100",
    "answer1Total": "5650",
    "answer2": "$100 to $300",
    "answer2Total": "22600",
    "answer3": "$301 to $500",
    "answer3Total": "45200",
    "answer4": "$501 to $800",
    "answer4Total": "73450",
    "answer5": "More than $800",
    "answer5Total": "113000"
  },
  {
    "question": "What is the total yearly mileage on your car?",
    "answer1": "Less than 5000 miles",
    "answer1Total": "3700",
    "answer2": "5000 to 10,000 miles",
    "answer2Total": "5550",
    "answer3": "10,001 to 15,000 miles",
    "answer3Total": "9250",
    "answer4": "15,001 to 20,000 miles",
    "answer4Total": "12950",
    "answer5": "More than 20,000 miles",
    "answer5Total": "18500"
  },
  {
    "question": "How many short flights (4 hours or less) have you taken this year?",
    "answer1": "0 to 5",
    "answer1Total": "2750",
    "answer2": "6 to 10",
    "answer2Total": "8800",
    "answer3": "11 to 15",
    "answer3Total": "14300",
    "answer4": "16 to 20",
    "answer4Total": "19800",
    "answer5": "More than 20",
    "answer5Total": "27500"
  },
  {
    "question": "How many long flights (more than 4 hours) have you taken this year?",
    "answer1": "0 to 2",
    "answer1Total": "4400",
    "answer2": "3 to 5",
    "answer2Total": "17600",
    "answer3": "6 to 8",
    "answer3Total": "30800",
    "answer4": "9 to 10",
    "answer4Total": "41800",
    "answer5": "More than 10",
    "answer5Total": "52800"
  },
  {
    "question": "Do you recycle newspaper?",
    "answer1": "Yes, I always recycle newspaper.",
    "answer1Total": "0",
    "answer2": "Yes, I recycle most of my newspaper.",
    "answer2Total": "60",
    "answer3": "Yes, I recycle a little newspaper.",
    "answer3Total": "120",
    "answer4": "I do not get newspaper.",
    "answer4Total": "0",
    "answer5": "No, I do not recycle any newspaper.",
    "answer5Total": "184"
  },
  {
    "question": "Do you recycle aluminum and tin?",
    "answer1": "Yes, I recycle all of my aluminum and tin.",
    "answer1Total": "0",
    "answer2": "Yes, I recycle most of my aluminum and tin.",
    "answer2Total": "166",
    "answer3": "Yes, I recycle a little aluminum and ton.",
    "answer3Total": "120",
    "anser4": "",
    "answer4Total": "41800",
    "answer5": "More than 10",
    "answer5Total": "52800"
  },
]


let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions =questions.length;

const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const option5 = document.querySelector('.option5');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');

//Function to generate question 
function generateQuestions (index) {
    //Select each question by passing it a particular index
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total;
    const option3Total = questions[index].answer3Total;
    const option4Total = questions[index].answer4Total;
    const option5Total = questions[index].answer5Total;
    //Populate html elements 
    questionEl.innerHTML = `${index + 1}. ${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option4.setAttribute('data-total', `${option4Total}`);
    option5.setAttribute('data-total', `${option5Total}`);
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
    option4.innerHTML = `${question.answer4}`
    option5.innerHTML = `${question.answer5}`
}


function loadNextQuestion () {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    //Check if there is a radio input checked
    if(!selectedOption) {
        alert('Please select your answer!');
        return;
    }
    //Get value of selected radio
    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

    ////Add the answer score to the score array
    score.push(answerScore);

    selectedAnswersData.push()
    

    const totalScore = score.reduce((total, currentNum) => total + currentNum);

    //Finally we incement the current question number ( to be used as the index for each array)
    currentQuestion++;

        //once finished clear checked
        selectedOption.checked = false;
    //If quiz is on the final question
    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    //If the quiz is finished then we hide the questions container and show the results 
    if(currentQuestion == totalQuestions) {
        container.style.display = 'none';
        result.innerHTML =
         `<h1 class="final-score">Your Score: ${totalScore}</h1>
         <div class="summary">
            <h1>Summary</h1>
            <p>Based on your score, this is the recommended pricing plan for your practice: </p>
            <p>Premium: 10 - 15</p>
            <p>Advanced: 6 - 10 </p>
            <p>Basic: 5</p>
        </div>
        <button class="restart">Restart Quiz</button>
         `;
        return;
    }
    generateQuestions(currentQuestion);
}

//Function to load previous question
function loadPreviousQuestion() {
    //Decrement quentions index
    currentQuestion--;
    //remove last array value;
    score.pop();
    //Generate the question
    generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
    if(e.target.matches('button')) {
    //reset array index and score
    currentQuestion = 0;
    score = [];
    //Reload quiz to the start
    location.reload();
    }

}


generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);