// //// 
// CREATE LEVELS IN WHICH THE USER CAN SET DIFFICULTY 
function difficulty(easy, normal, hard) {
    this.easy = easy;
    this.normal = normal;
    this.hard = hard;
};
var level = new difficulty(60, 40, 5);
// VARIABLE FOR GAME LEVEL SELECT FOR DISPLAY
var gameLevelSelect = $("div#gameLevelSelect").show();
// VARIABLE FOR QUESTION BOX, BECOMES UPHIDDEN ON START CLICK
var gameQuestionBox = $("div#gameQuestionBox").hide();
// SET INITIAL LEVEL TO 40 SECONDS, OR NORMAL TO ENSURE THE COUNTDOWN RESETS PROPERLY
var levelSelect = 40;
var intervalId;

// DIFFICULTY SELECTION MENU
$("input[type='radio']").click(function () {
    var radioValue = $("input[name='answer-dark']:checked").val();
    if (radioValue === 'easy') {
        levelSelect = level.easy;
    } if (radioValue === 'hard') {
        levelSelect = level.hard;
    } if (radioValue === 'normal') {
        levelSelect = level.normal
    }; // console.log(levelSelect);
});

// COUNTDOWN TIMER
function countdownTimer() {
    //  SHOW THE COUNTDOWN TIMER
    $("#countdown-clock").html("<h2>" + levelSelect + "</h2>");
    levelSelect--;
    if (levelSelect === -1) {
        clearInterval(intervalId);
        $("#startButton").removeClass("is-error is-disabled");
        $("#startButton").html("Try Again");
        gameLevelSelect.show();
    }
};

// CALL AND POPULATE QUIZ
$(document).ready(function () {

    $("#startButton").on("click", start);

    function start() {
        $("#startButton").addClass("is-error is-disabled");
        $("#startButton").html("Good Luck!");
        gameLevelSelect.hide();
        clearInterval(intervalId);
        intervalId = setInterval(countdownTimer, 1000);
        gameQuestionBox.show();
        (function () {
            function buildQuiz() {
                const output = [];
                myQuestions.forEach(
                    (currentQuestion, questionNumber) => {
                        const answers = [];
                        // FOR EACH ANSWER ADD A RADIO BUTTON
                        for (letter in currentQuestion.answers) {
                            answers.push(
                                `<label>
                                <input type="radio" class="nes-radio is-dark"
                                name="question${questionNumber}"
                                value="${letter}">
                                <span>${letter} :</span>
                                ${currentQuestion.answers[letter]}
                                </label>`
                            );
                        }
                        output.push(
                            `<div class="question">
                                ${currentQuestion.question}</div>
                                <div class="answers">
                                ${answers.join('')}</div>`
                        );
                    }
                );
                quizContainer.innerHTML = output.join('');
            };

            function showResults() {
                const answerContainers = quizContainer.querySelectorAll('.answers');
                let numCorrect = 0;
                myQuestions.forEach(
                    (currentQuestion, questionNumber) => {
                        const answerContainer = answerContainers[questionNumber];
                        const selector = 'input[name=question' + questionNumber + ']:checked';
                        // ||{} added to prevent error when value is null
                        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
                        if (userAnswer === currentQuestion.correctAnswer) {
                            numCorrect++;
                            answerContainers[questionNumber].style.color = 'lightgreen';
                        } else { answerContainers[questionNumber].style.color = 'red'; }
                    }
                );
                resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
            };

            const quizContainer = document.getElementById('quiz');
            const resultsContainer = document.getElementById('results');
            const submitButton = document.getElementById('submit');
            const myQuestions = [
                {
                    question: "What is the air speed velocity of an unladen swallow?",
                    answers: {
                        a: "Light speed",
                        b: "Bird speed",
                        c: "24 MPH (11 MPS)",
                        d: "... African or European?"
                    },
                    correctAnswer: "c"
                },
                {
                    question: "Is snow cold?",
                    answers: {
                        a: "Yes",
                        b: "Possibly",
                        c: "Impossible",
                        d: "No way!"
                    },
                    correctAnswer: "a"
                }
            ];
            buildQuiz();
            submitButton.addEventListener('click', showResults);
        })();
    };

});


// //// ARCHIVE
// ////
// //// TOGGLE THE DIFFICULTY MENU OFF ON GAME START
// $("div#gameLevelSelect").click(function() {
//     $(this).toggleClass("off");
// });
// var gameLevelSelect;
// $("#startButton").click(function() {
//     if (gameLevelSelect) {
//         gameLevelSelect.appendTo(".nes-container with-title is-dark");
//         gameLevelSelect = null;
//     } else {
//         gameLevelSelect = $("div#gameLevelSelect").detach();
//     }
// });