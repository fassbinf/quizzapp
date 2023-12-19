let currentQuestion = 0;
let rightAnswer = 0;
let Audio_Success= new Audio ('sounds/right.mp3');
let Audio_Fail= new Audio ('sounds/false.mp3');

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    document.getElementById('all-questions2').innerHTML = questions.length;
    rightAnswerSelected();
    showQuestion();
}

function showQuestion() {
    if (gameIsOver()) {
        showEndScreen();
    }
    else {
        updateProgressBar();
        showNextQuestion();
    }
  
}

function showEndScreen() {
    document.getElementById('end-screen').style = '';
    document.getElementById('question-body').style ="display: none";
    document.getElementById('header-image').src = 'img/winner.png';
}

function showNextQuestion() {
    let question = questions[currentQuestion];  
    showQuestionNumber();
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function updateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100); 
    document.getElementById('progress-bar').innerHTML = `${percent} %`; 
    document.getElementById('progress-bar').style = `width:${percent}%;`; 
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;
    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        Audio_Success.play();
        rightAnswer ++;
        rightAnswerSelected();
    }
    else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        Audio_Fail.play();
    }
    document.getElementById('next-button').disabled = false;
}



function nextQuestion() {
    currentQuestion ++;
    document.getElementById('next-button').disabled = true;
    removeColor();
    showQuestion();
} 

function gameIsOver() {
    return currentQuestion >= questions.length;
}

function removeColor() {
 
document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
document.getElementById('answer_1').parentNode.classList.remove('bg-success');
document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
document.getElementById('answer_2').parentNode.classList.remove('bg-success');
document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
document.getElementById('answer_3').parentNode.classList.remove('bg-success');
document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function showQuestionNumber() {
    document.getElementById('currect-question').innerHTML = currentQuestion + 1;
}

function rightAnswerSelected () {
    document.getElementById('right-question').innerHTML = rightAnswer;
}

function playAgain() {
    document.getElementById('header-image').src = 'img/quiz.jpg';
    document.getElementById('end-screen').style = 'display: none';
    document.getElementById('question-body').style ='';
    currentQuestion = 0;
    rightAnswer = 0;
    init();
}