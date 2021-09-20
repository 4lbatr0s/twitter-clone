const Like  = require('./like');
const User = require('./user');
const Tweet = require('./tweet');




const createDate = function(){
    const d = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    const monthName = monthNames[d.getMonth()];
    const hour = ("0" + d.getUTCHours()).slice(-2);
    const minute = ("0" + d.getUTCMinutes()).slice(-2);
    const pmOrAm = ("0" + d.getUTCHours()).slice(-2) < 12 ? 'AM' : 'PM';
    const tweetDate = hour + ":" + minute + " " + pmOrAm + " - " +
    monthName.slice(0,3) + " " + ("0" + d.getDate()).slice(-2) + ", " + 
    ("0"+d.getUTCFullYear()).slice(-4);
    return tweetDate;

 }


console.log(createDate());


 