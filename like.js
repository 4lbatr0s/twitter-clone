const Tweet = require('./tweet');

module.exports = class Like{
    constructor(user, tweet){
        this.user = user;
        this.tweet = Tweet.createDate();
    }
}