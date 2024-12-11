// Funktionen för inlämning
function submit(){
    let score = 0;
    let maxScore = 16;
    disableInputs();
    score = ToFCheck(score);
    score = multiOptsCheck(score);
    score = cBoxCheck(score);
    showScore(score, maxScore);
}

// RADIOBUTTONS

// True or False rättning
function ToFCheck(score) {
    const ToFanswers = []; // Användarens svar
    const ToFAns = ["False", "True", "True", "False"]; // Facit 

    const questions = document.querySelectorAll(".ToF"); // Query för allt inom klassen .ToF

    score = radioButtonCheck(ToFanswers, ToFAns, questions, score);

    return score;
}

// multiOptions rättning
function multiOptsCheck(score) {
    const optAnswers = []; // Användarens svar
    const optAns = ["2i", "9/4", "2", "3"]; // Facit
    

    const questions = document.querySelectorAll(".multiOpt"); // Query för allt inom klassen multiOpt

    score = radioButtonCheck(optAnswers, optAns, questions, score);

    return score;
}



function radioButtonCheck(userAns, Facit, questions, score){
    questions.forEach((question, id) => {
        const checked = question.querySelector("input:checked"); // Ta "checked" radioknappar
        if (checked) {
            userAns.push(checked.value); // Spara valda värdet
        } else {
            userAns.push("Null"); // Vid inget svar, ge null
            question.classList.add("empty"); // Markera frågan som obesvarad med klassen "empty"
        }

        const labels = question.querySelectorAll("label"); // Spara alla labels inom div som söks

        
        if (userAns[id] === Facit[id]) { // Kolla om svar matchar facit

            // Vid rätt, ge label som tillhör valda svaret klassen "correct"
            LabelAssign(labels, userAns[id], "correct");
            score++; // Öka score

        } else if (userAns[id] !== "Null") { // Koll om svar inte är "Null" (ifall frågan besvarats men ändå blev fel)

            // Vid fel (inte tomt), ge label som tillhör valda svaret klassen "incorrect"
            LabelAssign(labels, userAns[id], "incorrect");
        }
    });

    return score;
}

//Checkbox rättning

function cBoxCheck(score) {
    const cBoxAns = [ // facit
        ["1", "-1"],
        ["0.5", "-2"],
        ["2", "-3"],
        ["2", "-1"]
    ];

    const questions = document.querySelectorAll(".cBox"); // Query för allt inom klassen cBox

    questions.forEach((question, id) => { // Loop igenom allt i "questions"
        const checked = question.querySelectorAll("input:checked"); // Spara "checked" inputs
        const labels = question.querySelectorAll("label"); // Spara labels

        if (checked.length === 0) {
            question.classList.add("empty");  // Lägg till "empty" om 0 svar gavs på någon fråga
        }

        checked.forEach(input => {
            const selectedValue = input.value; // Användarens input (svar)

            let isCorrect = false; // boolean som sparar om svaret givet är rätt eller fel

            cBoxAns[id].forEach(correctVal => {
                if (selectedValue === correctVal) {
                    // Ändra isCorrect till true så det inte markeras som fel senare
                    isCorrect = true;
                    LabelAssign(labels, correctVal, "correct");
                    score++;  // Öka score
                }
            });
    
            // Vid fel svar, ge klass "incorrect"
            if (!isCorrect) {
                LabelAssign(labels, selectedValue, "incorrect");
                score--; // Sänk score (undviker att checka alla checkbox för perfekt score)
            }
        });
    });

    return score;

}


//Other

// Utskrift för poäng
function showScore(score, maxScore) {

    let scoreId = document.getElementById("score"); // förkorttande variabel
    let scoreInfoId = document.getElementById("scoreInfo"); // förkortande variabel

    scoreId.innerHTML = score + "p/" + maxScore + "p" // utskrift av poäng

    if(score > maxScore*0.75){ // >75% imponerad meddelande 
        scoreId.style.color = "green";
        scoreInfoId.innerHTML = "Above 75%. Great job, your hard work shows!";
        scoreInfoId.style.color = "green";

    } else if (score >= maxScore*0.5){ // 50%-75% passing meddalande
        scoreId.style.color = "orange";
        scoreInfoId.innerHTML = "Between 50% and 75% good job.";
        scoreInfoId.style.color = "orange";

    } else { // <50% fail meddelande
        scoreId.style.color = "red";
        scoreInfoId.innerHTML = "Less than 50%. Please study and try again later.";
        scoreInfoId.style.color = "red";

    }
}

// Färgandet av backgrund vid label för att visa rätt/fel
function LabelAssign(labels, value, ans){
    labels.forEach(label => {
        const inputElement = label.previousElementSibling;  // Hitta label som passar knapp/checkbox
        if (inputElement && inputElement.value === value) { 
            label.classList.add(ans);  // Lägg till "correct" eller "incorrect" klass 
        }
    });
}


// Input avstängning
function disableInputs() {
    const inputs = document.querySelectorAll("input[type='radio'], input[type='checkbox']"); // Samlar ihop alla inputs
    
    // Stänger av alla inputs förutom darkMode
    inputs.forEach(input => {
        if (input.id !== "dMode") {
            input.disabled = true;
        }
    });
}

// Darkmode funktionen
function darkModeFunc() {
    var element = document.body; // Förkortande variabel
    element.classList.toggle("dark-mode"); // Lägger darkmode på body
}