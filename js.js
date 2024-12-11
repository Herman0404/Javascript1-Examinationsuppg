

const optAns = [
    "2i", "9/4", "2", "3"
]

const cBoxAns = [
    ["1","-1"],
    ["0.5", "-2"],
    ["2","-3"],
    ["2","-1"]
]

function submit(){
    ToFCheck();
}

function ToFCheck() {
    const ToFanswers = []; // Användarens svar
    const ToFAns = ["False", "True", "True", "False"]; // Facit array

    const questions = document.querySelectorAll(".ToF"); // Query för alla frågor

    questions.forEach((question, id) => {
        const checked = question.querySelector("input:checked"); // Ta valda radioknappen
        if (checked) {
            ToFanswers.push(checked.value); // Spara valda värdet
        } else {
            ToFanswers.push("Null"); // Vid inget svar, ge null
            question.classList.add("unanswered"); // Markera frågan som obesvarad med klassen "unanswered"
        }

        const labels = question.querySelectorAll("label"); // Spara alla labels inom div som söks

        
        if (ToFanswers[id] === ToFAns[id]) { // Kolla om svar matchar facit

            // Vid rätt, ge label som tillhör valda svaret klassen "correct"
            labels.forEach(label => {
                if (label.previousElementSibling.value === ToFanswers[id]) {
                    label.classList.add("correct");
                }
            });

        } else if (ToFanswers[id] !== "Null") { // Koll om svar inte är "Null" (i andra ord ifall frågan besvarats men ändå blev fel)

            // Vid fel (inte tomt), ge label som tillhör valda svaret klassen "incorrect"
            labels.forEach(label => {
                if (label.previousElementSibling.value === ToFanswers[id]) {
                    label.classList.add("incorrect");
                }
            });
        }
    });
}



function darkModeFunc() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}