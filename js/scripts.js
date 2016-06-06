$(document).ready(function() {
  var flavors = ['chocolate','blue','Mountain Dew','egg','vanilla','fish and chips','salt','crushed up Goldfish'];
  flavors.forEach(function(flavor) {
    $('ul').append('<li>' + flavor + '</li>');
  });
});
