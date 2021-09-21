const Like  = require('./like');
const User = require('./user');
const Tweet = require('./tweet');
const Mention = require('./mention');
const Database = require ('./database');



const Michael = new User('falafelord');
const Rose = new User('CarnageFlower');
const Leonardo = new User("renaissancePrince");
const Emilia = new User("Book Addict");

Michael.tweet('Hey Twitter, this is my first tweet.');
Rose.like(Michael.tweets[0]);
Rose.mention(Michael.tweets[0], 'Welcome to the club!');
Leonardo.like(Michael.tweets[0]); //try to include mention, like in the same function as parameters
Leonardo.mention(Michael.tweets[0], 'Do not go into this deeper mate, believe me.');
Emilia.like(Michael.tweets[0]);
Emilia.mention(Michael.tweets[0], 'Another one, hah!');



Database.save('users.json', Michael);