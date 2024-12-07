let qNum = 0;
let t = true;
let f = false;
let q1 = "10 / 0 = 0";
let q2 = "17 * 6 = 102";
let q3 = "64 / 4 = 16";
let q4 = "17 / 3 = 7";
let q5 = "93 / 3 = 31";
let q6 = "14 - 12 + 7 - 3 + 9 = 15";
let q7 = "0.5^2 = 0.25";
let q8 = "14 % 9 = 5"
let q9 = "36 * 27 = 962"
let q10 = "743 % 21 = 6"

const qaArray = [
    [q1, f, 0],
    [q2, t, 0],
    [q3, t, 0],
    [q4, f, 0],
    [q5, t, 0],
    [q6, t, 0],
    [q7, t, 0], 
    [q8, t, 0], 
    [q9, f, 0], 
    [q10, f, 0]
];

function startQuiz(){
    var quiz = document.querySelector("#quiz");
    var start = document.querySelector("#startButton");
    quiz.classList.toggle("hidden");
    start.classList.toggle("hidden");
    document.getElementById("quizQuestion").innerHTML = qaArray[qNum][0];
    qNum++;
}

function questionAnswer(){
    if (qNum < qaArray.length) {
        document.getElementById("quizQuestion").innerHTML = qaArray[qNum][0];
        qNum++;
    } 
    
    else {
        let score = 0;
        for (i = 0; i < qaArray.length; i++){
            score += qaArray[i][2];
        }
        document.getElementById("quizQuestion").innerHTML = score;
    }
}

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}