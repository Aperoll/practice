var request = require('request');

var url = 'https://na.api.pvp.net/api/lol/na/v2.2/matchhistory/21391319?api_key=<I almost put my API key here publicly HAH>';

request(url, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    //console.log(body);
     var json = JSON.parse(body);
     console.log(json['matches']);
  }
});
