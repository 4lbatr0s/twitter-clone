const Tweet = require("./tweet");

module.exports = class User{
    constructor(userName){
        this.userName = userName;
        this.context = context;
        this.tweets = [];
        this.likes = [];
    }
    tweet(context){ 
        this.tweets.push(new Tweet(this.userName, context));
    }
    like(tweet){
        
    }
}