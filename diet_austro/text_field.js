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

const allergies = {
  eggs: "eggs",
  lactose: "lactose",
  fish: "fish",
  peanuts: "peanuts",
  soy: "soy",
  treeNuts: "treeNuts",
  wheat: "wheat",
  pollen: "pollen"
}

var breakfast = [
  
  {
    calories: 86,
    name: "tuna fish",
    all: allergies.fish
  }, 
  
  {
    clories: 417,
    name: "bacon",
    all: null
  },
  
  {
    calories: 390,
    name: "toast",
    all: allergies.wheat
  },
  
  {
    calories: 357,
    name: "cornflakes",
    all: null
  },
  
  {
    calories: 30,
    name: "fruit salad",
    all: allergies.pollen
  },
  
  {
    calories: 287,
    name: "sausage",
    all: allergies.eggs
  },
  
  {
    calories: 212,
    name: "scrambled eggs",
    all: allergies.eggs
  },
  
  {
    calories: 39,
    name: "peaches",
    all: allergies.pollen
  },
  
  {
    calories: 48,
    name: "apricot",
    all: allergies.pollen
  }
]

var lunch = [
  
  {
    calories: 36,
    name: "chicken soup",
    all: null
  },
  
  {
    calories: 54,
    name: "tomato soup",
    all: null
  },
  
  {
    calories: 91,
    name: "potato soup",
    all: null
  },
  
  {
    calories: 88,
    name: "pea soup",
    all: null
  },
  
  {
    calories: 267,
    name: "bread",
    all: allergies.wheat
  },
  
  {
    calories: 218,
    name: "tortilla",
    all: allergies.wheat
  },
  
  {
    calories: 598,
    name: "peanutbutter",
    all: allergies.peanuts
  },
  
  {
    calories: 423,
    name: "salame",
    all: null
  }
]

var dinner = [
  
  {
    calories: 149,
    name: "beef jerky",
    all: null
  },
  
  {
    calories: 246,
    name: "canned beef",
    all: null
  },
  
  {
    calories: 183,
    name: "beef steak",
    all: null
  },
  
  {
    calories: 120,
    name: "fish",
    all: allergies.fish
  },
  
  {
    calories: 188,
    name: "meatballs",
    all: allergies.eggs
  },
  
  {
    calories: 24,
    name: "chicken with rice",
    all: null
  },
  
  {
    calories: 144,
    name: "spaghetti bolognese",
    all: allergies.wheat
  }
]

var desert = [ 
  {
    calories: 466,
    name: "brownie",
    all: allergies.lactose
  },
  
  {
    calories: 278,
    name: "jam",
    all: allergies.pollen
  },
  
  {
    calories: 90,
    name: "coffee",
    all: null
  },
  
  {
    calories: 63,
    name: "grape juice",
    all: allergies.pollen
  },
  
  {
    calories: 45,
    name: "orange juice",
    all: allergies.pollen
  }
]

function button(){

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
      if(choices.weight == 0 || choices.height == 0 || choices.age == 0 || choices.gender == 0){
     }
     else{
      var BMR = calculate_cal(choices);
      var allergieList = allergie(choices);
      var day = 1
      do{
      writingFunc(getDailyDiet(allergieList, BMR, day));
        day++;
      }while(day<=7)
     }

}

function calculate_cal(data){
  var BMR;
  if(data.gender == 'Male'){    
   BMR = 10*data.weight + 6.5*data.height - 5*data.age + 5;
  }else{
    BMR = 10*data.weight + 6.5*data.height - 5*data.age - 161;
  }

  console.log(BMR);
  return BMR
}

function allergie(data){
  var alergie = [];
  if(data.eggs == 1)alergie.push(allergies.eggs);
  if(data.lactose == 1)alergie.push(allergies.lactose);
  if(data.fish == 1)alergie.push(allergies.fish);
  if(data.peanuts == 1)alergie.push(allergies.peanuts);
  if(data.soy == 1)alergie.push(allergies.soy);
  if(data.treeNuts == 1)alergie.push(allergies.treeNuts);
  if(data.wheat == 1)alergie.push(allergies.wheat);
  if(data.pollen == 1)alergie.push(allergies.pollen);
  console.log(alergie);

  return alergie
}

function getDailyDiet(allergies, BMR, day){
  var filteredBreakfast = breakfast.filter(x => !allergies.includes(x.all));
  var indexOfBreakfast = Math.floor(Math.random() * (filteredBreakfast.length - 1));
  var filteredLunch = breakfast.filter(x => !allergies.includes(x.all));
  var indexOfLunch = Math.floor(Math.random() * (filteredLunch.length - 1));
  var filteredDinner = dinner.filter(x => !allergies.includes(x.all));
  var indexOfDinner = Math.floor(Math.random() * (filteredDinner.length - 1));
  var filteredDesert = desert.filter(x => !allergies.includes(x.all));
  var indexOfDesert = Math.floor(Math.random() * (filteredDesert.length - 1));

  var breakfastFood = breakfast[indexOfBreakfast]
  var lunchFood = lunch[indexOfLunch]
  var dinnerFood = dinner[indexOfDinner]
  var desertFood = desert[indexOfDesert]

  //proportions of kcal in daily servings 2/3/2 (breakfast/lunch/dinner)
  var breakfastCal = (BMR/7)*2;
  var lunchCal = (BMR/7)*3
  var dinnerCal = (BMR/7)*2;
  console.log(indexOfBreakfast, filteredBreakfast)
  //get the grams from each serving
  var breakfastGrams = (100*breakfastCal)/breakfastFood.calories;
  var lunchGrams = (100*lunchCal)/lunchFood.calories;
  var dinnerGrams = (100*dinnerCal)/dinnerFood.calories;

  //get the maximum amount of grams per serving, so it doens't get too heavy just to get all the cals. In those cases a "desert would be acceptable"
  var desertOk = 0
  if(breakfastGrams>(400+(2*choices.weight)))desertOk = 1
  if(lunchGrams>(500+(3*choices.weight)))desertOk = 1
  if(dinnerGrams>(400+(2*choices.weight)))desertOk = 1

  //make the numbers easier for the user to understand
  breakfastGrams = breakfastGrams - (breakfastGrams%25);
  lunchGrams = lunchGrams - (lunchGrams%25);
  dinnerGrams = dinnerGrams - (dinnerGrams%25);
  if(day == 1)var today = 'Monday';
  if(day == 2)var today = 'Tuesday';
  if(day == 3)var today = 'Wednesday';
  if(day == 4)var today = 'Thirsday';
  if(day == 5)var today = 'Friday';
  if(day == 6)var today = 'Saturday';
  if(day == 7)var today = 'Sunday';

  
  if(desertOk == 1){
   return `${today} ->Breakfast: ${breakfastGrams}g of ${breakfastFood.name}. Lunch: ${lunchGrams}g of ${lunchFood.name}. Dinner: ${dinnerGrams}g of ${dinnerFood.name}. Desert: ${desertFood.calories} g of ${desertFood.name}.`
  }
  else {
    return `${today} ->Breakfast: ${breakfastGrams}g of ${breakfastFood.name}. Lunch: ${lunchGrams}g of ${lunchFood.name}. Dinner: ${dinnerGrams}g of ${dinnerFood.name}. Desert: - .`
  }
}


function writingFunc(diet){
  var validation = document.createElement("p")
  validation.textContent = diet
  var makingtext = document.getElementById("elementid")
  makingtext.appendChild(validation)
}
//write()  createElement()  textContent  appendChild()
