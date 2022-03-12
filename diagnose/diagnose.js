var list_of_answers = []

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
        if(list_of_answers[i] == undefined) {
            window.alert("Please answer all questions")
            return;
        }
    }
    var healthy = 1
    var diagnose = ""
    for(var i = 0; i<15; i++){
        console.log(i)
        score = score + list_of_answers[i]
        console.log(diagnose, healthy, score)
        if (i === 4){
            if(score >= 2){
                diagnose = diagnose + 'You may have malignancies' + '\n'
                healthy = 0
            }
            score = 0
        }
        if (i === 6) scoreTo6 = score
        if (i === 8 && score >= 2){
            diagnose = diagnose + 'you may suffer from muscular dystrophy' + '\n'
            healthy = 0
            console.log(diagnose, healthy, score)
            score = score - scoreTo6
        }
        if (i === 14 && score >= 2){
            diagnose = diagnose + 'You may have orthostatic hypotension' + '\n'
            healthy = 0
            console.log(diagnose, healthy, score)
            score = 0
        }
    }
    if (healthy) appendValidation("You are healthy!")
    appendValidation(diagnose)
}

function appendValidation(diagnose){
    var validation = document.createElement("p")
    validation.textContent = diagnose
    document.body.appendChild(validation)
}