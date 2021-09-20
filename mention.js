const User = require('./user');

module.exports = class Mention{
    constructor(user, tweet, context){
        this.user = user;
        this.tweet = tweet;
        this.context = context;
        this.date = User.date();
    }
};
