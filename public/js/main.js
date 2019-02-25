// (function() {
//   //var btn = iframe.contentWindow.document.getElementById('mybutton');
//   //$('.b-agent-demo_header').css('background-color', '#edebe8 !important');
//   console.log("main.js working here...");
//   $("#spokesbot").contents().find(".b-agent-demo_header").style('background-color', '#edebe8 !important');
// }());

// console.log("main.js working here...");
// $("#spokesbot").contents().find("body").html('<div> blah </div>');

$(document).ready(function() {
  setTimeout(function () {
    console.log("main.js working here...");
    $('#spokesbot').contents().find('.b-agent-demo_header').css('background-color', 'red');
  }, 3000);

});
