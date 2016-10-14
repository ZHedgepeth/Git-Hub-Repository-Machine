var apiKey = require('./../.env').apiKey;

GitHub = function(){
}

GitHub.prototype.getRepos = function(username, displayFunction) {
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response)
    displayFunction(username, response.login);
  }).fail(function(error){
    $('#showRepositories').text(error.responseJSON.message);
  });

  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
  $("#showRepositories").text("");
  for(var index=0; index<response.length;index++){
    $("#showRepositories").append("<li class='repoName'> REPOSITORY: " + response[index].name + "<ul><li class='repoDate'> DATE CREATED: " + response[index].created_at +  "<li class='repoDesc'>" + response[index].description + "</li></ul>" + "</li>")
  }
}).fail(function(error){
  console.log(error.responseJSON.message);
});
};

exports.gitHubModule = GitHub;
