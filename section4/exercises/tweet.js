/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author,
    this.content = content,
    this.timeStamp = timeStamp,
    this.numberOfLikes = numberOfLikes,
    this.comments = comments
  }

  addComments(newComment) {
    this.comments.push(newComment);
  }
  addLike() {
    this.numberOfLikes++;
  }
};

var tweetOne = new Tweet('Rachel Hill', 'Cookie Recipe', '14 December 2021 at 5:00 PM', 13, ['Love this recipe!', 'Thanks for sharing!']);
tweetOne.addComments('I made your recipe and loved it!');
console.log(tweetOne);

tweetOne.addLike();
console.log(tweetOne);

var tweetTwo = new Tweet('Ray', 'I love bagels!', '14 December 2021 at 10:00 AM', 20, ['Bagels are my favorite, too!', 'Could not agree more']);
tweetTwo.addComments('I would eat a bagel everyday if I could!');
console.log(tweetTwo);

tweetTwo.addLike();
console.log(tweetTwo);


//var tweetTwo = new Tweet('')
// for (var i = 1; i >= 1; i++) {
