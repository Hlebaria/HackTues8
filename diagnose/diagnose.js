var list_of_answers = []
function getAnwers(id) {
        list_of_answers[n_question] = answer
        if (list_of_answers[n_question]==0){
            console.log("Answer");
        }
}

function test(id){
    console.log(id)
}

function diagnose(){
    var score = 0
    var scoreTo6 = 0
    for(var i = 0; i<14; i++){
        console.log(list_of_answers[i])
        score = score + list_of_answers[i]
        if (i = 4 && score >= 2){
            document.write("Може да имаш злокачествени образувания");
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