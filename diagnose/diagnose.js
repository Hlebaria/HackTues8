var list_of_answers = []

var modal = document.getElementById("modalContent")

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
    for(let i = 0; i<15; i++){
        if(list_of_answers[i] == undefined) {
            window.alert("Please answer all questions")
            return;
        }
    }
    var healthy = 1
    for(let i = 0; i<15; i++){
        console.log(i)
        score = score + list_of_answers[i]
        console.log(healthy, score)
        if (i === 4){
            if(score >= 2){
                openModal()
                appendValidation('You may have malignancies. The term "malignancy" refers to the presence of cancerous cells that have the ability to spread to other sites in the body (metastasize) or to invade nearby (locally) and destroy tissues. It could be caused from the radiation in the cosmos. You should go to an oncologist.')
                healthy = 0
            }
            score = 0
        }
        if (i === 6) scoreTo6 = score
        if (i === 8 && score >= 2){
            openModal()
            appendValidation('You may suffer from muscular dystrophy. Muscular dystrophy is a group of diseases that cause progressive weakness and loss of muscle mass. In muscular dystrophy, abnormal genes (mutations) interfere with the production of proteins needed to form healthy muscle. ')
            healthy = 0
            console.log(healthy, score)
            score = score - scoreTo6
        }
        if (i === 14 && score >= 2){
            openModal()
            appendValidation('You may have orthostatic hypotension. Orthostatic hypotension is a form of low blood pressure that happens when you stand up from sitting or lying down. ')
            healthy = 0
            console.log(healthy, score)
            score = 0
        }
    }
    if (healthy){
        openModal()
        appendValidation("You are healthy!")
    }
}

function appendValidation(diagnose){
    var validation = document.createElement("p")
    validation.textContent = diagnose
    var modalContent = document.getElementById("modalContent")
    modalContent.appendChild(validation)
}

function openModal(){
    modal.style.display = "block"
}

function closeModal(){
    modal.style.display = "none"
    document. location. reload()
}