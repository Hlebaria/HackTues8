var list_of_answers = []

for (var i = 0; i < 15; i++){
    list_of_answers[i] = 0
}

function getAnwers(id) {
    var answer = id.charAt(0) === "y" ? 1 : 0 
    var tempId = id.substring(1)
    var n_question = parseInt(tempId)
    console.log(n_question, answer)
    list_of_answers[n_question - 1] = answer
}

function diagnose(){
    var score = 0
    var scoreTo6 = 0
    for(var i = 0; i<15; i++){
        console.log(i)
        score = score + list_of_answers[i]
        if (i === 4){
            if(score >= 2){
                appendValidation("You may have malignancies")
                console.log("prowrerka1")
            }
            score = 0
        }
        if (i === 6) scoreTo6 = score
        if (i === 8 && score >= 2){
            appendValidation("you may suffer from muscular dystrophy")
            console.log("prowrerka2")
            score = score - scoreTo6
        }
        if (i === 14 && score >= 2){
            appendValidation("You may have orthostatic hypotension")
            console.log("prowrerka3")
            score = 0
        }
    }
}

function appendValidation(diagnose){
    var validation = document.createElement("p")
    validation.textContent = diagnose
    document.body.appendChild(validation)
}