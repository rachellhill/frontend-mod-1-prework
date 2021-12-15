/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Two examples are already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/


//-------------------
// PART 1: Animals: Array Syntax
//-------------------

// EXAMPLE: write code below that will log an array of animals.
// Store the array in a variable.
var animals = ["Zebra", "Giraffe", "Elephant"];
console.log(animals);

// EXAMPLE: Write code below that will log "Zebra" from the animals array
// YOUR CODE HERE
console.log(animals[0]);

// YOU DO: Write code below that will log the number of elements in array of
// animals from above.
console.log(animals.length);


// YOU DO: Write code that will reassign the last item in the animals
// array to "Gorilla"
animals.pop();
//console.log(animals.pop()); <-- should not use array methods in console log as it is an informative command
var count = animals.push('Gorilla');
console.log(count);
console.log(animals);

// YOU DO: Write code that will add a new animal (type of your choice) to position 3.
animals[3] = 'Tiger';
console.log(animals);


// YOU DO: Write code that will log the String "Elephant" in the animals array

animals.unshift('Elephant');
//console.log(animals.unshift("Elephant")); <-- should not use array methods in console log as it is an informative command
console.log(animals);


//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var foods = ['Pizza', 'Pasta', 'Salad', 'Bread'];
console.log(foods);

// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.
console.log(foods.length);

// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added
foods.push('Broccoli');
//console.log(foods.push("Broccoli"));
console.log(foods);

// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed
foods.pop();
//console.log(foods.pop());
console.log(foods);

// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added
foods.unshift('Cereal', 'Oatmeal', 'Waffles');
//console.log(foods.unshift('Cereal', 'Oatmeal', 'Waffles'));
console.log(foods);

// YOU DO: Remove the food that is in index position 0.
foods.shift();
//console.log(foods.shift());
console.log(foods);


//-------------------
// PART 3: Where are Arrays used?
//-------------------

/*
Sometimes we need to hold on to multiple pieces of data, but have it grouped together in a list.
This is why programming languages have arrays!

One example of a web/mobile application that uses arrays is Instagram. Each user has a set of posts
associated with their account. Each post, is one of potentially many, that are grouped together in a list,
or, array.

The post itself likely has more complex data, but here's one way we can think about it:
*/

var posts = ["image at beach", "holiday party", "adorable puppy", "video of cute baby"];

// YOU DO: Think of a web application you commonly use. Where do you see LISTS utilized, where arrays
// may be storing data? Come up with 3 examples - they could be from different web applications or
// all from the same one.

// 1: Pinterest is an app that I commonly use which I believe is similar to Instagram where it shows lists of pictures
// that I might like or pin to my board, which is a list of pictures that I like.
// 2: I think Twitter is similar as it shows my tweets, which could essentially be an array of strings that as I tweet more and more, I'm adding more to the array.
// 3: Slack uses arrays when giving users the capability of creating a channel or a slack group. The people in the group are an array of who is in that specific group.


//-------------------
// Part 4: Don't let yourself forget everything from Section 2 of Pre-work
//-------------------

/*
YOU DO:
Using the variables defined below, write a program that will tell a user if they
will be able to call an Uber.

The user can call an uber if they have 15% battery remaining, or more. In this case, it doesn't matter
if the user has a charger at all, or what type.
The can call an uber if they have a charger and it is a car charger.

*/
var percentBatteryLeft = 12;
var hasCharger = false;
var chargerType = "home";

// Write your conditional here
// The line below is a conditional statement where it's saying "if the user has a charger and that charger type is a car charger, the user can call an uber".
if (hasCharger === true && chargerType === "car") {
  console.log("Your Uber is on its way!");
  // if the above coniditions meet this if statement, "your uber is on its way" will be returned.
  // if the above code returns false, then the below statement runs. It's asking if the user does not have a car charger and the batter percentage is less than 15,
  // the user will not be able to call an uber and the message "you are unable to call an uber" is returned.
} else if (hasCharger === false && chargerType != "car" && percentBatteryLeft < 15) {
  console.log("You are unable to call an Uber");
}

// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
