var gender;
function calculate_cal() {
    let inputWeg = document.getElementById("Weight").value;
    alert(inputWeg);
  }
let choices = [];

function Button(){
  let choices = [11];
  var ok = 1;
  do{
    ok=1;
    choices[0] = document.getElementById("Weight").value;
    choices[1] = document.getElementById("Height").value;
    choices[2] = document.getElementById("Age").value;
    choices[3] = document.getElementById("gender").value;
    choices[4] = document.getElementById("Eggs").value;
    choices[5] = document.getElementById("Lactose").value;
    choices[6] = document.getElementById("Fish").value;
    choices[7] = document.getElementById("Peanuts").value;
    choices[8] = document.getElementById("Soy").value;
    choices[9] = document.getElementById("Tree nuts").value;
    choices[10] = document.getElementById("Wheat").value;
    console.log(choices)

    for(var n=0;n<4;n++){
      if(choices[n] =='null'){
        alert("Insuficient information, input all the nessessary information");
        ok=0;
      }
    }
  }while(ok==0)

  alert("Success");
}