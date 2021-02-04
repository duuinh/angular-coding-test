const FUNDCODE = process.argv.slice(2)[0];
const https = require('https');

var options = { 
    hostname: 'codequiz.azurewebsites.net',
    method: 'GET',
    headers: {'Cookie': 'hasCookie=true'}
};
  
callback = function(response) {
    var str = ''
    response.on('data', function (chunk) {
      str += chunk;
    });
  
    response.on('end', function () {
    //   console.log(str);
      var regex = new RegExp(" *"+FUNDCODE+" *</td><td>([0-9]*\.?[0-9]*)</td>","g");
    //   var nav = str.match(regex);
      var nav = regex.exec(str)[1];
      console.log(nav);
    });
}
  
var req = https.request(options, callback);
req.end();