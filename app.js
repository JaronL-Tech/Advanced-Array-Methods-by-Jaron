//The purpose of this Lab is to get a solid understanding of the .filter() and .map() advanced array methods.
//These methods will be used extensively on future projects

//Dataset
let dishes = [
  {
    id: 1,
    name: "Pizza",
    cuisine: "Italian",
    servings: 8,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 2,
    name: "Spaghetti",
    cuisine: "Italian",
    servings: 2,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 3,
    name: "Ravioli",
    cuisine: "Italian",
    servings: 2,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 4,
    name: "Enchiladas",
    cuisine: "Mexican",
    servings: 6,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 5,
    name: "Tacos",
    cuisine: "Mexican",
    servings: 4,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 6,
    name: "Burrito Supreme",
    cuisine: "Mexican",
    servings: 1,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 7,
    name: "Elote",
    cuisine: "Mexican",
    servings: 4,
    ingredients: ["corn", "cheese"],
  },
  {
    id: 8,
    name: "Crepes",
    cuisine: "French",
    servings: 1,
    ingredients: ["flour", "sugar"],
  },
  {
    id: 9,
    name: "Corned Beef & Cabbage",
    cuisine: "Irish",
    servings: 10,
    ingredients: ["beef", "cabbage"],
  },
  {
    id: 10,
    name: "Beef Stew",
    cuisine: "Irish",
    servings: 8,
    ingredients: ["beef", "tomato"],
  },
  {
    id: 11,
    name: "Lasagna",
    cuisine: "Vegetarian",
    servings: 8,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 12,
    name: "Falafel",
    cuisine: "Vegetarian",
    servings: 1,
    ingredients: ["chickpea", "parsley"],
  },
  {
    id: 13,
    name: "Chili",
    cuisine: "Vegetarian",
    servings: 13,
    ingredients: ["tomato", "chickpea"],
  },
  {
    id: 14,
    name: "Goulash",
    cuisine: "Hungarian",
    servings: 15,
    ingredients: ["beef", "tomato"],
  },
  {
    id: 15,
    name: "Pho",
    cuisine: "Vietnamese",
    servings: 4,
    ingredients: ["beef", "ginger"],
  },
];

//Example function
//IMPORTANT: Take the time to step through this example function with a breakpoint until you could explain what is going on to someone else before starting this lab.

function filterExample() {
  //Debug tip: Use a console.log(el) inside the filter function to get a visualization of what el represents and see all its properties! This helps you to know what you can access with dot notation inside the filter. Do this every time you use a .filter or else you are working in the dark!
  let results;
  results = dishes.filter(function (el) {
    console.log("el inside filterExample's filter: ", el);
    if (el.cuisine === "Mexican") {
      return true;
    } else {
      return false;
    }
  });

  return results;
}

let mexicanFood = filterExample();
console.log("mexicanFood from filterExample", mexicanFood);

//Reminder: Do not move on to problem one until understand the example completely!!
//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter

function problemOne() {
  let results;
  results = dishes.filter(function (el) {
    console.log("el inside problemOne Filter:", el);
    if (el.cuisine === "Vegetarian") {
      return true;
    } else {
      return false;
    }
  });

  return results;
}
let VegetarianFood = problemOne();
console.log("VegetarianFood from problemone", VegetarianFood);

//2. Create a function that will prompt the user to enter a cuisine type and then return all dishes that match that type
//Filter

function problem2(cuisineType) {
  let filteredDishes = dishes.filter(function (dish) {
    return dish.cuisine === cuisineType;
  });
  return filteredDishes;
}

let userInput = prompt("Enter a cuisine type:");
let filteredDishes = problem2(userInput);

if (filteredDishes.length > 0) {
  console.log(`Dishes matching ${userInput} cuisine:`);
  filteredDishes.forEach((dish) => {
    console.log(`- ${dish.name}`);
  });
} else {
  console.log(`No dishes found for ${userInput} cuisine.`);
  return result;

  let problem2 = problem2();
  console.log("Cusine type from Problem2", filteredDishes);
}

//3. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter
let results;
function filterDishesByCriteria(_cuisineType, minServingSize) {
  const filterDishesByCuisine = dishes.filter(function (el) {
    return;
    el.cuisine === cuisineType && el.servings >= minServingSize;
  });
  return filterDishesByCuisine;
}
let italianDishesWithLargeServings = filterDishesByCriteria("Italian", 5);

if (italianDishesWithLargeServings.length > 0) {
  console.log("Italian dishes with serving size greater than 5:");
  italianDishesWithLargeServings.forEach((dish) => {
    console.log(`- ${dish.name} (Servings: ${dish.servings})`);
  });
} else {
  console.log("No Italian dishes found with serving size greater than 5.");
  return result;
}

let filterDishesByCuisine = filterDishesByCuisine();
console.log(
  "Cusine type from filterDishesByCriteria and filterDishesByCuisine",
  filterDishesByCuisine,
  filterDishesbyServingCount
);

//4. Create a function that will return only dishes whose id number matches their serving count.
//Filter
function filterDishesByIdAndServingCount() {
  const filteredDishes = dishes.filter((dish) => dish.id === dish.servings);
  return filteredDishes;
}

const matchingIdAndServingDishes = filterDishesByIdAndServingCount();

if (matchingIdAndServingDishes.length > 0) {
  console.log("Dishes with matching id and serving count:");
  matchingIdAndServingDishes.forEach((dish) => {
    console.log(`- ${dish.name} (ID: ${dish.id}, Servings: ${dish.servings})`);
  });
} else {
  console.log("No dishes found with matching id and serving count.");
  return result;
}

let filterDishesByIdAndServingCount = filterDishesByIdAndServingCount();
console.log(
  "Dishes whose Id number matches there serving count",
  filterDishesByIdAndServingCount
);

//5. Create a function that will return only dishes whose serving count is even.
//Filter
function problemFive() {
  let results;
  results = dishes.filter(function (el) {
    console.log("el inside filter: ", el);
    if (el.id % 2 == 0) {
      return true;
    } else {
      return false;
    }
  });

  return results;
}
let ServingCountIsEven = problemFive();
console.log("Filtered food from problem 5", ServingCountIsEven);

//6. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Double Hint: Research 'javascript does array include item'
//Filter
function problem6() {
  let results;
  results = dishes.filter(function (el) {
    console.log("e inside filter: ", el);
    if (el.ingredients.includes("chickpea")) {
      return true;
    } else {
      return false;
    }
  });

  return results;
}
let IncludesChickpea = problem6();
console.log("Filtered food from problem 6", IncludesChickpea);

//7. Create a function that will prompt the user to type the name of one ingredient. Then use a filter to find all the dishes whose ingredients array INCLUDES that ingredient. Return the new array.
//Filter
function problem7() {
  let results;
  ingredient = prompt("Select ingredients");
  results = dishes.filter(function (el) {
    console.log("el inside filter: ", el);
    if (el.ingredients.includes(ingredient)) {
      return true;
    } else {
      return false;
    }
  });

  return results;
}
let IncludesSelectedIngredients = problem7();
console.log("Filtered food from problem 7", IncludesSelectedIngredients);

//8a. Create a function that will return an array of the string cuisine types. Ie, ["Italian", "Italian", "Mexican", ...]
//Map
function problem8() {
  let cuisineTypes = dishes.map(function (el) {
    return el.cuisine;
  });
  return cuisineTypes;
}

let cuisines = problem8();
console.log("Cuisines, problem 8", cuisines);

//9. Create a function that will return an array of strings, with the cuisine type appended to the start of the dish's name. Ie, ["Italian Pizza", "Italian Spaghetti", ...]
//Map
function problem9() {
  let cuisineTypesPlusDish = dishes.map(function (el) {
    return el.cuisine + " " + el.name;
  });
  return cuisineTypesPlusDish;
}

let cuisinePlusDish = problem9();
console.log("Cuisines, problem 9", cuisinePlusDish);

//10. Create a function that will use advanced array methods on the 'dishes' array and return the result ["Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"]

function problem10() {
  let results;
  results = dishes.filter(function (el) {
    console.log("e inside filterExample's filter: ", el);
    if (el.cuisine === "Vegetarian") {
      return true;
    } else {
      return false;
    }
  });
  let cuisineTypesPlusDish = results.map(function (el) {
    return el.cuisine + " " + el.name;
  });
  return cuisineTypesPlusDish;
}

let vegetarianFoodCuisinePlusDish = problem10();
console.log("vegetarian food from problem 10", vegetarianFoodCuisinePlusDish);

//BONUS

//8b. Use the filter method to eliminate duplicate from problem 8a.

//11. Create a function that will return dishes whose ingredients array INCLUDES "tomato" OR "cheese".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter

//12. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.

//13. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.
