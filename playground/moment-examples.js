var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1491850279;
var currenMoment = moment.unix(timestamp);

console.log(currenMoment.format('MMM D, YY @ H:mm'));


//January 3rd, 2016 @ 12:13 AM

console.log(currenMoment.format('MMMM Do, YYYY @ h:mm A'));
