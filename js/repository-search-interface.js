var apiKey = require('./../.env');
var GitHub = require('./../js/repository-search.js').gitHubModule

var displayRepositories = function(username, repositories) {
  $('#showRepositories').text("The repositories listed for " + username + " are " + repositories);
}

$(document).ready(function() {
  var currentGitHubObject = new GitHub();
  $('#usernameRepositories').click(function() {
    var username = $('#username').val();
    currentGitHubObject.getRepos(username, displayRepositories);
  });
});
