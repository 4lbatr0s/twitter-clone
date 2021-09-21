const Like = require("./like");
const Mention = require("./mention");
const Tweet = require("./tweet");

module.exports = class User{
    constructor(userName){
        this.userName = userName;
        this.tweets = [];
        this.likes = [];
        this.mentions = [];
    }
    tweet(context){ 
       const tweeted = new Tweet(this, context);
       this.tweets.push(tweeted);
       console.log(`${this.userName} tweeted  "${tweeted.context}"`);

    }

    like(tweet){
        const liked = new Like(this, tweet);
        this.likes.push(liked);
        tweet.likedBy.push(this);
        console.log(`${this.userName} liked  ${tweet.user}'s  "${tweet.context}" tweet`);
    }

    mention(tweet, context){
        const newMent = new Mention(this, tweet, context);
        this.mentions.push(newMent);
        tweet.mentionedBy.push(this);
        console.log(`${this.userName} responded  ${tweet.user}'s  "${tweet.context}" tweet  --> "${newMent.mentionContext}"`);
    }
}