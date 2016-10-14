var apiKey = require('./../.env').apiKey;

GitHub = function(){
}

GitHub.prototype.getRepo = function(username, displayFunction) {
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.GitHubModule = GitHub;
