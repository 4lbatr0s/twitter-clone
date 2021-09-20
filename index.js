const Like  = require('./like');
const User = require('./user');
const Tweet = require('./tweet');
const Mention = require('./mention');


const Michael = new User('falafelord');
const Rose = new User('CarnageFlower');

Michael.tweet('Hello Twitter, this is my first  tweet.');
Rose.tweet('Boring..');

Rose.like(Michael.tweets[0]);

Rose.mention(Michael.tweets[0], "Hello Michael, welcome to Twitter.");

console.log(Michael.tweets[0].mentions);