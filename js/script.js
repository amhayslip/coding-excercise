var initialize =  function () {
  newPoller();
};

var bandTemplateHtml = $('#templates .band').html();
var bandTemplate = _.template(bandTemplateHtml);

var newPoller = function () {
  var poller = new Poller({ frequency: 15}, function (results) {
    $('.row').remove();
    for (var i = 0; i < results.length; i += 1) {
      var arrayHtml = bandTemplate(results[i]);
      $('#leaderboard').append(arrayHtml);
      $('#leaderboard').hide().fadeIn('slow');
    }
  });
  poller.start();
};


$(document).ready(function () {
  initialize();
});

