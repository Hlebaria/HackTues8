var list_of_answers = []
function getAnwers(n_question, answer) {
        list_of_answers[n_question] = answer
        if (list_of_answers[n_question]==0){
            console.log("Answer");
        }
}

function diagnose(){
    var score = 0
    var scoreTo6 = 0
    for(var i = 0; i<14; i++){
        console.log("prowrerka")
        score = score + list_of_answers[i]
        if (i = 4 && score >= 2){
            console.log("prowrerka1")
            score = 0
        }
        if (i = 6) scoreTo6 = score
        if (i = 8 && score >= 2){
            console.log("prowrerka2")
            score = score - scoreOn6
        }
        if (i = 14 && score >= 2){
            console.log("prowrerka3")
            score = 0
        }
    }
}