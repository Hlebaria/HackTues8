let choices = [12];

function Button(){

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
      choices[11] = document.getElementById("Pollen").value;
      console.log(choices);

      if(choices[0] == 0 || choices[1] == 0 || choices[2] == 0 || choices[3] == 0){
       alert("uga buga");
     }
     else{
      alert("raboti") 
      console.log(Calculate_cal(choices[0], choices[1], choices[2], choices[3]));
     }
}

function Calculate_cal( W, H, A, G){
  if(G == 'Male'){    
  var BMR = 10*W + 6.5*H - 5*A + 5;
  console.log(BMR);
  }else{
    var BMR1 = 10*W + 6.5*H - 5*A - 161;
    console.log(BMR1);
  }
}