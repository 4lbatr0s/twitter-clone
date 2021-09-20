module.exports = class Tweet{
    constructor(userName,context){
        this.userName = userName;
        this.likes = [];
        this.mentions = [];
        this.context =context;
    }
}