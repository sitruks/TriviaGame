// //// 
// // TODO: NEED TO FULLTY CHANGE OVER THE THEME, CURRENTLY STILL A FILLER ONE. POLARIZING TOPIC, BEST SERVED FOR TESTING DURING LATE NIGHT JAM SESSIONS OVER FINAL SUBMISSION.

// CREATE LEVELS IN WHICH THE USER CAN SET DIFFICULTY 
function difficulty(easy, normal, hard, evil) {
    this.easy = easy;
    this.normal = normal;
    this.hard = hard;
    this.evil = evil;
};
var level = new difficulty(60, 40, 20, 5);

// DIFFICULTY SELECTION MENU
$("input[type='radio']").click(function () {
    var radioValue = $("input[name='answer-dark']:checked").val();
    if (radioValue === 'easy') {
        levelSelect = level.easy;
    } if (radioValue === 'normal') {
        levelSelect = level.normal;
    } if (radioValue === 'hard') {
        levelSelect = level.hard;
    } if (radioValue === 'evil') {
        levelSelect = level.evil
    }; // console.log(levelSelect);
});

// SET INITIAL LEVEL TO 40 SECONDS, OR NORMAL TO ENSURE THE COUNTDOWN RESETS PROPERLY
var levelSelect = 40;
var intervalId;

// VARIABLE FOR GAME LEVEL SELECT FOR DISPLAY AT START
var gameWelcome = $("div#gameWelcome");
var gameLevelSelect = $("div#gameLevelSelect");
var gameQuestionBox = $("div#gameQuestionBox").hide();
var gameResults = $("div#gameResults").hide();
var gameProgress = $("div#gameProgress").hide();

// COUNTDOWN TIMER
function countdownTimer() {
    //  SHOW THE COUNTDOWN TIMER
    $("#countdown-clock").html("<h2>" + levelSelect + "</h2>");
    levelSelect--;
    if (levelSelect === -1) {
        clearInterval(intervalId);
        $("#startButton").removeClass("is-error is-disabled");
        levelSelect = 40;
        gameProgress.hide();
        gameQuestionBox.hide();
        gameResults.show();
        gameLevelSelect.show();
        $("#startButton").html("Try Again");
    }
};


// // TODO: RETURN BUTTON
//     returnButton = $("returnButton").on("click", return) {
    
    //     }
    
// // TODO: FIX BUG THAT POPULATES MULTIPLE IMAGES PER BUTTON CLICK
// // TODO: SET DEFAULT NAME FIELD IF THE SUBMIT BUTTON IS NOT CLICKED
// RANDOM IMAGE WITH USER INPUT FOR END OF GAME
function userName() {
    $("#name_field").empty();
    //GET
    magic = $('#name_field').val();
    //SET
    console.log(magic);
    if (magic === null) {
        magic = "Bats"
    } else 
    $('#name_field').val(magic);
    console.log(magic);
    
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag="+ magic +"";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
      var imageUrl = response.data.image_original_url;
      var magicImage = $("<img>");
      magicImage.attr("src", imageUrl);
      magicImage.attr("alt", "magic image");
      $("#resultsImage").prepend(magicImage);
    });
};

// CALL AND POPULATE QUIZ
$(document).ready(function () {
    
    $("#startButton").on("click", start);
    
    function start() {
        $("#startButton").addClass("is-error is-disabled");
        $("#startButton").html("Good Luck!");
        gameWelcome.hide();
        gameResults.hide();
        gameLevelSelect.hide();
        clearInterval(intervalId);
        intervalId = setInterval(countdownTimer, 1000);
        gameQuestionBox.show();
        gameProgress.show();
        (function () {
            const myQuestions = [
                {
                    question: "How do you spell the First Lady's first name?",
                    answers: {
                        A: "Melanie",
                        B: "Melvinia",
                        C: "Melania",
                        D: "Merlin"
                    },
                    correctAnswer: "C"
                },
                {
                    question: "How do you spell that popular dark beverage, usually enjoyed in the morning and served warm?",
                    answers: {
                        A: "Cofvefe",
                        B: "Coffee",
                        C: "Covfefe",
                        D: "Joe"
                    },
                    correctAnswer: "B"
                },
                {
                    question: "What do NCAA champions crave?",
                    answers: {
                        A: "Harbingers",
                        B: "Humbargers",
                        C: "Hamberders",
                        D: "Hamburgers"
                    },
                    correctAnswer: "D"
                },
                {
                    question: "How do you spell the First Lady's first name, again?",
                    answers: {
                        A: "Melania",
                        B: "Melvinia",
                        C: "Melanie",
                        D: "Merlin"
                    },
                    correctAnswer: "A"
                },
                {
                    question: "How do you?",
                    answers: {
                        A: "I'm fine thank you!",
                        B: "Millenial",
                        C: "Pardon?",
                        D: "Browsers!"
                    },
                    correctAnswer: "A"
                }
            ];

            function buildQuiz() {
                const output = [];
                myQuestions.forEach(
                    (currentQuestion, questionNumber) => {
                        const answers = [];
                        // FOR EACH ANSWER ADD A RADIO BUTTON
                        for (letter in currentQuestion.answers) {
                            answers.push(
                                `<li><label>
                                <input type="radio" class="nes-radio is-dark"
                                name="question${questionNumber}"
                                value="${letter}">
                                <span>${letter}:</span>
                                ${currentQuestion.answers[letter]}
                                </label></li>`
                            );
                        }
                        output.push(
                            `<div class="slide">
                            <div class="question">${currentQuestion.question}</div><br>
                            <div class="answers"><ul>${answers.join('')}</ul></div>
                            </div>`
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
                        // ||{} ADDED TO PREVENT ERROR WHEN VALUE IS NULL, HENCE CAN CLICK NEXT/PREVIOUS WITHOUT CHOOSING AN ANSWER
                        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
                        if (userAnswer === currentQuestion.correctAnswer) {
                            numCorrect++;
                            answerContainers[questionNumber].style.color = 'lightgreen';
                        } else { answerContainers[questionNumber].style.color = 'red'; }
                    }
                );
                levelSelect = 0;
                gameWelcome.hide();
                gameResults.show();
                resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
            };

            function showSlide(n) {
                slides[currentSlide].classList.remove('active-slide');
                slides[n].classList.add('active-slide');
                currentSlide = n;
                if (currentSlide === 0) {
                    previousButton.style.display = 'none';
                }
                else {
                    previousButton.style.display = 'inline-block';
                }
                if (currentSlide === slides.length - 1) {
                    nextButton.style.display = 'none';
                    submitButton.style.display = 'inline-block';
                }
                else {
                    nextButton.style.display = 'inline-block';
                    submitButton.style.display = 'none';
                }
            }

            function showNextSlide() {
                showSlide(currentSlide + 1);
            }

            function showPreviousSlide() {
                showSlide(currentSlide - 1);
            }

            const quizContainer = document.getElementById('quiz');
            const resultsContainer = document.getElementById('results');
            const submitButton = document.getElementById('submit');

            buildQuiz();
            const previousButton = document.getElementById("previous");
            const nextButton = document.getElementById("next");
            const slides = document.querySelectorAll(".slide");
            let currentSlide = 0;

            showSlide(0);
            previousButton.addEventListener("click", showPreviousSlide);
            nextButton.addEventListener("click", showNextSlide);
            submitButton.addEventListener('click', showResults);
        })();
    };

});
