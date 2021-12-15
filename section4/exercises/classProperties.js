/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dog {

}
var breed = new Dog();
console.log(breed);

var age = new Dog();
console.log(age);

// Prompt 2: Snack
class Snack {

}
var cheezit = new Snack();
console.log(cheezit);

var goldfish = new Snack();
console.log(goldfish);

// Prompt 3: Shirt
class Shirt {

}
var shortSleeve = new Shirt();
console.log(shortSleeve);

var longSleeve = new Shirt();
console.log(longSleeve);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
class DogInfo {
  constructor() {
    this.breed = 'Golden Retreiver';
    this.age = 3;
    this.name = "Leon";
  }
}

var breed = new DogInfo();
console.log(breed);

// Prompt 2: Snack

class SnackType {
  constructor() {
    this.chip = 'kettle cooked chip';
    this.cracker = 'cheezit';
    this.wafer = 'vanilla wafer';
  }
}
var cracker = new SnackType();
console.log(cracker);

// Prompt 3: Shirt
class ShirtClass {
  constructor() {
    this.sleeve = 'long sleeve';
    this.color = 'blue';
    this.storePurchased = 'Nordstrom';
  }
}
var favoriteShirt = new ShirtClass();
console.log(favoriteShirt);

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class DogDynamic {
  constructor(lbs, inchesTall) {
    this.weight = lbs;
    this.height = inchesTall;
  }
}
var dogInfo = new DogDynamic(60, 24);
console.log(dogInfo);
var dogLarge = new DogDynamic(120, 48);
console.log(dogLarge);

// Prompt 2: Snack
class SnackDynamic {
  constructor(count, cals) {
    this.snackCount = count;
    this.calories = cals;
  }
}
var snackHealthy = new SnackDynamic(15, 115);
console.log(snackHealthy);
var snackUnhealthy = new SnackDynamic(50, 700);
console.log(snackUnhealthy);

// Prompt 3: Shirt
class ShirtDynamic {
  constructor(size, type, clr) {
    this.shirtSize = size;
    this.sleeveLenth = type;
    this.color = clr;
  }
}
var shirtWarmWeather = new ShirtDynamic('Medium', 'Short Sleeve', 'Yellow');
console.log(shirtWarmWeather);
var shirtColdWeather = new ShirtDynamic('Small', 'Long Sleeve', 'Red');
console.log(shirtColdWeather);
