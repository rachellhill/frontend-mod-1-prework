// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = 'Superman';
var specialAbility = 'Fly';

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = ("Hello! My name is " + heroName);
console.log(greeting);
var catchphrase = (`I am able to ${specialAbility}!`);
console.log(catchphrase);

// Declare two variables - power AND energy - set to integers
var power = 15
var energy = 300

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy

var fullPower = power * 500;
console.log(fullPower);
var fullEnergy = energy + 150;
console.log(fullEnergy);

// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = false;
var identityConcealed = true;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ["Lochness Monster", "Darth Vader", "OctoMan"];
var sidekicks = ["Clark Kent", "Amy", "Mr. Freeze"];

// Print the first sidekick to your console
console.log(sidekicks[0]);

// Print the last archEnemy to the console
console.log(archEnemies[2]);

// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push('Lex Luthor');

// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);

// Remove the first sidekick from the sidekicks array
sidekicks.shift();

// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sidekicks);

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel
function assessSituation(dangerLevel, saveTheDay, badExcuse) {
  if (dangerLevel > 50) {
    console.log(badExcuse);
  } else if (dangerLevel < 10) {
    console.log(saveTheDay);
  } else {
    console.log("Meh. Hard pass.");
  }
}

assessSituation(11, "I saved the day once again!", "My stomach hurts");
assessSituation(55, "I saved the day once again!", "My stomach hurts");
assessSituation(1, "I saved the day once again!", "My stomach hurts");

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.


//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."

assessSituation(99, announcement, excuse);
assessSituation(21, announcement, excuse);
assessSituation(3, announcement, excuse);

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)

var ScaryMonster = {
  name: "Cookie Monster",
  smell: "sweet vanilla",
  weight: 500,
  citiesDestroyed: ["Chicago", "Denver", "LA"],
  luckyNumbers: [3, 17, 18],
  address: {
    number: 574,
    street: 'Arlington Ave',
    state: 'CO',
    zip: 80202
  }
};
console.log(ScaryMonster.address);

// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50

class SuperHeroDynamic {
  constructor(name, superpower, age) {
    this.name = name;
    this.superpower = superpower;
    this.age = age;
    this.archNemesis = 'The Syntax Error';
    this.powerLevel = 100;
    this.energyLevel = 50;
  }
  sayName(newName) {
    console.log(this.name);
  }
  maximizeEnergy() {
    this.energyLevel = 1000;
  }
  gainPower(addPower) {
    this.powerLevel = addPower + this.powerLevel;
  }
}

// - Create 2 instances of your SuperHero class
var superHeroNew = new SuperHeroDynamic('Spiderman', 'fly', 20);
superHeroNew.sayName();
console.log(superHeroNew);

var newEnergyLevel = new SuperHeroDynamic('Batman', 'teleport', 150);
newEnergyLevel.maximizeEnergy();
newEnergyLevel.sayName();
console.log(newEnergyLevel);

superHeroNew.gainPower(150);
console.log(superHeroNew);

newEnergyLevel.gainPower(400);
console.log(newEnergyLevel);


// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number


// Reflection
// What parts were most difficult about this exerise?
// I could not complete this exercise in 30 minutes, which I found was the most difficult. The other most difficult part of this exercise was the
// class methods but I was able to get it eventually using internet, section4 prework help, and my fellow Turing students. After completing this exercise,
// I feel like I understand what exactly is going on in this method and why.
// What parts felt most comfortable to you?
// everything up intil the class exercises felt pretty comfortable to me. I know I will get better and quicker with more practice, but I do feel good now.
// What skills do you need to continue to practice before starting Mod 1
// PRACTICE! I also think annotating code really helps me understand what's happening and break down a problem better.
// it also helps be remember and retain information.
