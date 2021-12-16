// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// Declare a function named buildABear that has 5 parameters: name, age, fur, clothes, and specialPower.
function buildABear(name, age, fur, clothes, specialPower) {
  // within this function, declare a variable named greeting that is assigned to a string of your bear's greeting.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  //declare a variable named demographics that is assigned an array of the bear's name and age.
  var demographics = [name, age];
  // declare a variable named powerSaying that is assigned another string with what you would like the bear to say (ex: the bear's talent or favorite activity)
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // declare an object named builtBear and assign this object 5 key-value pairs to describe the bear's basic info, clothes,
  // fur, cost, if they are cuddly or not, and an array of sayings.
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };
// when the function is called, it will return the builtBear value.
  return builtBear
  //end of function
}

// create two object instances of buildABear that passes through the parameter's arguments.
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');


//FizzBuzz
// declare a function named Fizzbuzz that has 3 parameters: num1, num2, range.
function fizzBuzz(num1, num2, range) {
  //create a loop using keyword 'for', initialize iteration i which starts at 0. under the condition where i is less than or equal
  // the value of range parameter. At the end of each loop, increment counter by 1.
  for (var i = 0; i <= range; i++) {
    // evaluate conditional statement 1 if a remainder of i divided by num1 is strictly equal to 0 AND remainder of i divided by num2 is strictly
    // equal to 0, then return the string 'fizzbuzz'
    // if conditional statement 1 returns false, code executes line 47 conditional statement 2.
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
      // evaluate conditional statement 2 if the remainder of i divided by num1 strictly equals 0, return the string 'fizz'.
      // if conditional statement 2 returns false, code executes conditional statement 3 on line 51
    } else if (i % num1 === 0) {
      console.log('fizz');
      // perform condiditional statement 3 if the remainder of i divided by num2 strictly equals 0, return the string 'buzz'.
      // if conditional statement 3 returns false, code executes conditional statement 4 on line 54.
    } else if (i % num2 === 0) {
      console.log('buzz');
      // code executes conditional statement 4 if none of the conditions above evaluate true,
    } else {
      // print out value of i.
      console.log(i);
    }
  }
}

// call the function that takes in the 3 expected arguments 3, 5 and 100 through the parameters num1, num2, and range.
fizzBuzz(3, 5, 100);
// call the function that takes in the 3 expected arguments 5, 8 and 400 through the parameters num1, num2, and range.
fizzBuzz(5, 8, 400);
