var gender;
function calculate_cal() {
    let inputWeg = document.getElementById("Weight").value;
    alert(inputWeg);
  }
let choices = [];


function Button(){
  var ok = 0;
  let choices = [11];
  var problem = false

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
      console.log(choices);

      if(choices[0] == 0 || choices[1] == 0 || choices[2] == 0 || choices[3] == 0){
       alert("uga buga");
     }
     else alert("raboti")
  }
