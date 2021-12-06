/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 2;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
In this test, there are two possible outcomes: if door #1 is chosen, then the bear chooses to wear the hat. The else statement is run only if the door choice is not #1.So, if door bearChoice
is #2, then the bear will choose to wear the scarf.
2. What variable has a new value assigned to it after the first if statement executes?
bearClothing has a new variable assigned to it after the first if statement executes.
3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
The value of bearClothing would be a scarf because the hat can only be chosen by the bear if doorChoice is strictly equal to 1.
4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
In this test, the code is asking in line 27 if the bearChoice is strictly equal to 1, then the message returned will say "you offer the bear your scarf and the bear shows you a secret passage out"
If the choice does not equal 1 but equals 2, line 30 will return the message "you tell the bear the scarf is too small and it starts to cry!"
If the choice does not equal 2 but equals 3, line 29 will return the message "you run as fast as you can into the next roo. It's full of snakes!"
If the choice does not equal 1, 2, OR 3, then any other choice will return the message "you stay with the bear and become best friends!" in line 34.
Only one section of this if/else if/else structure will have its instructions run. Once a line of this structure is true, JavaScript will not continue on.
5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
"You run as fast as you can into the next room. It's full of snakes!"
6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
The bear will be wearing the hat, and the final message will say "you tell the bear the hat is too small and it starts to cry!"
7. What is your favorite ending?
*/"You offer the bear your scarf and the bear shows you a secret passage out!"
