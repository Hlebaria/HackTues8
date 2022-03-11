var diet_answers = []

for(var i = 0; i < 12; i++){
    diet_answers[i] = 0
}

function Answers(questions, answer) {
        diet_answers[questions] = answer
        if (diet_answers[questions]==1){
            console.log("Answer");
        }
}