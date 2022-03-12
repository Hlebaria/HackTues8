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
    name: "tuna fish",
    all: 3
  }, 
  bacon: {
    clories: 417,
    name: "bacon",
    all: 0
  },
  toast: {
    calories: 390,
    name: "toast",
    all: 7
  },
  cornflakes: {
    calories: 357,
    name: "cornflakes",
    all: 0
  },
  fruitsalad: {
    calories: 30,
    name: "fruit salad",
    all: 8
  },
  sausage: {
    calories: 287,
    name: "sausage",
    all: 1
  },
  scrambledeggs: {
    calories: 212,
    name: "scrambled eggs",
    all: 1
  },
  peaches: {
    calories: 39,
    name: "peaches",
    all: 8
  },
  apricot: {
    calories: 48,
    name: "apricot",
    all: 8
  }
}

var lunch = {
  chickensoup: {
    calories: 36,
    name: "chicken soup",
    all: 0
  },
  tomatosoup: {
    calories: 54,
    name: "tomato soup",
    all: 0
  },
  potatosoup: {
    calories: 91,
    name: "potato soup",
    all: 0
  },
  peasoup: {
    calories: 88,
    name: "pea soup",
    all: 0
  },
  bread: {
    calories: 267,
    name: "bread",
    all: 7
  },
  tortilla: {
    calories: 218,
    name: "tortilla",
    all: 7
  },
  peanutbutter: {
    calories: 598,
    name: "peanutbutter",
    all: 4
  },
  salame: {
    calories: 423,
    name: "salame",
    all: 0
  }
 }

var dinner = {
  beefjerky: {
    calories: 149,
    name: "beef jerky",
    all: 0
  },
  cannedbeef: {
    calories: 246,
    name: "canned beef",
    all: 0
  },
  beefsteak: {
    calories: 183,
    name: "beef steak",
    all: 0
  },
  fish: {
    calories: 120,
    name: "fish",
    all: 3
  },
  meatballs: {
    calories: 188,
    name: "meatballs",
    all: 1
  },
  chickenwithrice: {
    calories: 24,
    name: "chicken with rice",
    all: 0
  },
  spaghettibolognese: {
    calories: 144,
    name: "spaghetti bolognese",
    all: 1
  }
}

var desert = {
  brownie: {
    calories: 466,
    name: "brownie",
    all: 2
  },
  jam: {
    calories: 278,
    name: "jam",
    all: 8
  },
  cafe: {
    calories: 90,
    name: "coffee"
  },
  grapejuice: {
    calories: 63,
    name: "grape juice",
    all: 8
  },
  orangejuice: {
    calories: 45,
    name: "orange juice",
    all: 8
  }
}

function Button(){

      choices.weight = document.getElementById("Weight").value;
      choices.height = document.getElementById("Height").value;
      choices.age = document.getElementById("Age").value;
      choices.gender = document.getElementById("gender").value;
      choices.eggs = document.getElementById("Eggs").value;
      choices.lactose = document.getElementById("Lactose").value;
      choices.fish = document.getElementById("Fish").value;
      choices.peanuts = document.getElementById("Peanuts").value;
      choices.soy = document.getElementById("Soy").value;
      choices.treenuts = document.getElementById("Tree nuts").value;
      choices.wheat = document.getElementById("Wheat").value;
      choices.pollen = document.getElementById("Pollen").value;
      //console.log(choices);

      if(choices.weight == 0 || choices.height == 0 || choices.age == 0 || choices.gender == 0){
       alert("uga buga");
     }
     else{
      alert("raboti") 
      Calculate_cal(choices.weight, choices.height, choices.age, choices.gender);
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
  var bbb = E + L + F + Pea + S + T + W + P
  console.log(bbb);
}