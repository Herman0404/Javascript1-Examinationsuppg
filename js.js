const cBoxAns = [
    ["1","-1"],
    ["0.5", "-2"],
    ["2","-3"],
    ["2","-1"]
]

let points = 0;

function submit(){
    disableInputs();
    ToFCheck();
    multiOptsCheck();
    console.log(points);
}

function ToFCheck() {
    const ToFanswers = []; // Användarens svar
    const ToFAns = ["False", "True", "True", "False"]; // Facit 

    const questions = document.querySelectorAll(".ToF"); // Query för alla frågor

    radioButtonCheck(ToFanswers, ToFAns, questions);
}

function multiOptsCheck() {
    const optAnswers = []; // Användarens svar
    const optAns = ["2i", "9/4", "2", "3"];
    

    const questions = document.querySelectorAll(".multiOpt"); // Query för alla frågor

    radioButtonCheck(optAnswers, optAns, questions);
}



function radioButtonCheck(userAns, Facit, questions){
    questions.forEach((question, id) => {
        const checked = question.querySelector("input:checked"); // Ta valda radioknappen
        if (checked) {
            userAns.push(checked.value); // Spara valda värdet
        } else {
            userAns.push("Null"); // Vid inget svar, ge null
            question.classList.add("unanswered"); // Markera frågan som obesvarad med klassen "unanswered"
        }

        const labels = question.querySelectorAll("label"); // Spara alla labels inom div som söks

        
        if (userAns[id] === Facit[id]) { // Kolla om svar matchar facit

            // Vid rätt, ge label som tillhör valda svaret klassen "correct"
            labels.forEach(label => {
                if (label.previousElementSibling.value === userAns[id]) {
                    label.classList.add("correct");
                }
            });

            points++; // Lägg även till poäng till summan

        } else if (userAns[id] !== "Null") { // Koll om svar inte är "Null" (i andra ord ifall frågan besvarats men ändå blev fel)

            // Vid fel (inte tomt), ge label som tillhör valda svaret klassen "incorrect"
            labels.forEach(label => {
                if (label.previousElementSibling.value === userAns[id]) {
                    label.classList.add("incorrect");
                }
            });
        }
    });
}


function disableInputs() {

    const inputs = document.querySelectorAll("input[type='radio'], input[type='checkbox']"); // Spara typer av inputs
    
    // Stäng av inputs med en loop
    inputs.forEach(input => { 
        input.disabled = true;
    });
}

function darkModeFunc() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}