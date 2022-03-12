var choices = {
  weight: null,
  height: null,
  age: null,
  gender: null,
  eggs: null,
  lactose: null,
  fish: null, 
  peanuts: null,
  soy: null,
  treenuts: null,
  wheat: null,
  pollen: null
}

var breakfast = {
  tunafish: {
    calories: 86,
    name: "tuna fish"
  }, 
  bacon:  417,
  toast: 390,
  cornflakes: 357,
  fruitsalad: 30,
  sausage: 287,
  scrambledeggs: 212,
  peaches: 39,
  apricot: 48
}

var lunch = {
  chickensoup: 36,
  tomatosoup: 54,
  potatosoup: 91,
  peasoup: 88,
  bread: 267,
  tortilla: 218,
  peanutbutter: 598,
  salame: 423
 }

var dinner = {
  beefjerky: 149,
  cannedbeef: 246,
  beefsteak: 183,
  fish: 120,
  meatballs: 188,
  chickenwithrice: 24,
  spaghettibolognese: 144
}

var desert = {
  brownie: 466,
  jam: 278,
  cafe: 90,
  grapejuice: 63,
  orangejuice: 45
}

function getPersonalInformation(){

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
      //console.log(choices);

      if(choices[0] == 0 || choices[1] == 0 || choices[2] == 0 || choices[3] == 0){
       alert("uga buga");
     }
     else{
      alert("raboti") 
      Calculate_cal(choices[0], choices[1], choices[2], choices[3]);
     }


}

function Calculate_cal( W, H, A, G){
  var BMR;
  if(G == 'Male'){    
   BMR = 10*W + 6.5*H - 5*A + 5;
  }else{
    BMR = 10*W + 6.5*H - 5*A - 161;
  }
  console.log(BMR);
}

function Fiter( E, L, F, Pea, S, T, W, P){
  
  console.log(bbb);
}