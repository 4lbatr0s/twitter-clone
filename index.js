const Like  = require('./like');
const User = require('./user');
const Tweet = require('./tweet');
const Mention = require('./mention');


const Michael = new User('falafelord');
const Rose = new User('CarnageFlower');

Michael.tweet('Hello Twitter, this is my first  tweet.');
Rose.tweet('Boring..');

console.log(Michael.likes, Michael.tweets);
console.log(Rose.likes, Rose.tweets);

Rose.like(Michael.tweets[0]);

console.log(Michael.likes, Michael.tweets);
console.log(Rose.likes, Rose.tweets);
