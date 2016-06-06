var DOMelements = [];
var message;
$(document).ready(function() {

  $('*').click(function () {
    message = "";
    DOMelements.push($(this).prop('nodeName'));
    DOMelements.forEach(function(element) {
      if (element === DOMelements[0]) {
        message = "This element is a " + element + " element";
      } else if (element === DOMelements[DOMelements.length-1]) {
        message += " inside the " + element + " element.";
      } else if (element === DOMelements[DOMelements.length-2]) {
        message += " inside the " + element + " element";
      } else {
        message += " inside a " + element + " element";
      }
      if (message.includes('HTML')) {
        alert(message);
        DOMelements = [];
      }
    });

  });
});
