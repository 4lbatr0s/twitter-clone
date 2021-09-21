module.exports = class Like{
    constructor(user, tweet){
        this.user = user.name;
        this.tweet = tweet.context;
    }
}