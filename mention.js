const Tweet = require('./tweet');


module.exports = class Mention extends Tweet{
    
    
    constructor(user,context, tweet){
        super(user, context.context); 
        this.mentionContext = tweet;
        this.mentions = [];
    }
};
