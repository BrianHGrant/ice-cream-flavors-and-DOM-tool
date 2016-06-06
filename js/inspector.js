var DOMelements = [];
var message;
var elementGlobal;
var originalValue;
$(document).ready(function() {

  $('*').click(function () {
    if ( elementGlobal === DOMelements[0]) {
            $("*").removeClass('pink');
    }
    message = "";
    DOMelements.push($(this).prop('nodeName'));
    DOMelements.forEach(function(element) {
      elementGlobal = element;
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
    if ( elementGlobal === DOMelements[0]) {
      $(this).addClass('pink');
      $('.pink').css('background-color', 'pink');
    }

  });
});
