// //// FUNCTIONS TO BE ADDED IN AT A LATER TIME
// // TODO: CREATE GENRES IN WHICH THE USER CAN CHOOSE FOR QUIZZING 
// function quizGenre(prezidential, presidential, movie, ) {
//     this.easy = easy;
//     this.normal = normal;
//     this.hard = hard;
// };
// var quiz = new quizGenre(60, 40, 5);

// // TODO: QUIZ GENRE SELECTION MENU
// $("input[type='radio']").click(function () {
//     var radioValue = $("input[name='answer-dark']:checked").val();
//     if (radioValue === 'easy') {
//         quizSelect = quiz.easy;
//     } if (radioValue === 'hard') {
//         quizSelect = quiz.hard;
//     } if (radioValue === 'normal') {
//         quizSelect = quiz.normal
//     }; // console.log(levelSelect);
// });

// // TODO: SET INITIAL QUIZ TO "" SINCE THE RADIO BUTTON 'CLICKED' IS SELECTED ON IT
// var quizSelect = ;


// //// QUESTION BANK

// const myQuestions = [
//     {
//         question: "How do you spell the First Lady's first name?",
//         answers: {
//             A: "Melanie",
//             B: "Melvinia",
//             C: "Melania",
//             D: "Merlin"
//         },
//         correctAnswer: "C"
//     },
//     {
//         question: "How do you spell that popular dark beverage, usually enjoyed in the morning and served warm?",
//         answers: {
//             A: "Cofvefe",
//             B: "Coffee",
//             C: "Covfefe",
//             D: "Joe"
//         },
//         correctAnswer: "B"
//     },
//     {
//         question: "What do NCAA champions crave?",
//         answers: {
//             A: "Harbingers",
//             B: "Humbargers",
//             C: "Hamberders",
//             D: "Hamburgers"
//         },
//         correctAnswer: "D"
//     },
//     {
//         question: "How do you spell the First Lady's first name, again?",
//         answers: {
//             A: "Melania",
//             B: "Melvinia",
//             C: "Melanie",
//             D: "Merlin"
//         },
//         correctAnswer: "A"
//     },
//     {
//         question: "How do you?",
//         answers: {
//             A: "I'm fine thank you!",
//             B: "Millenial",
//             C: "Pardon?",
//             D: "Browsers!"
//         },
//         correctAnswer: "A"
//     }
// ];

// const myQuestions = [
//     {
//         question: "What is the air speed velocity of an unladen swallow?",
//         answers: {
//             a: "Light speed",
//             b: "Bird speed",
//             c: "24 MPH (11 MPS)",
//             d: "... African or European?"
//         },
//         correctAnswer: "c"
//     },
//     {
//         question: "Is snow cold?",
//         answers: {
//             a: "Yes",
//             b: "Possibly",
//             c: "Impossible",
//             d: "No way!"
//         },
//         correctAnswer: "a"
//     }
// ];


// //// PICTURES
// https://giphy.com/embed/ZGRIt8l3Zymcw"

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