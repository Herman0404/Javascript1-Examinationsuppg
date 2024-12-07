let qNum = 0;
let t = true;
let f = false;

const qaArray = [
    ["10 / 0 = 0", f, 0],
    ["17 * 6 = 102", t, 0],
    ["64 / 4 = 16", t, 0],
    ["17 / 3 = 7", f, 0],
    ["93 / 3 = 31", t, 0],
    ["14 - 12 + 7 - 3 + 9 = 15", t, 0],
    ["0.5^2 = 0.25", t, 0],
    ["14 % 9 = 5", t, 0],
    ["36 * 27 = 962", f, 0],
    ["743 % 21 = 6", f, 0]
];

function startQuiz(){
    const quiz = document.querySelector("#quiz");
    const start = document.querySelector("#startButton");

    quiz.classList.toggle("hidden");
    start.classList.toggle("hidden");
    questionUpdate();
}

function questionUpdate(){
    document.getElementById("quizQNum").innerHTML = "Question " + (qNum + 1)    ;
    document.getElementById("quizQuestion").innerHTML = qaArray[qNum][0];
}


function questionAnswer(ans) {
    if (qNum >= (qaArray.length-1)) {
        answerCheck(ans);
        let score = 0;
        for (let i = 0; i < qaArray.length; i++) {
            score += qaArray[i][2];
        }
        document.getElementById("quizQuestion").innerHTML = score;
    } else {
        answerCheck(ans);
        qNum++;  
        questionUpdate();  
    }
}


function qTrue(){
    questionAnswer(t);
}

function qFalse(){
    questionAnswer(f);
}

function answerCheck(ans){
    if(ans == qaArray[qNum][1]){
        qaArray[qNum][2] = 1;
    }
}


function darkModeFunc() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}