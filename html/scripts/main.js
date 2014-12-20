$(function() {
  $("#ippon").click(function(){
  	$.raiseALMemoryEvent("pepperAction", "ippon");
  });
  $("#sanbon").click(function(){
  	$.raiseALMemoryEvent("pepperAction", "sanbon");
  });
  $("#osaka").click(function(){
  	$.raiseALMemoryEvent("pepperAction", "osaka");
  });
});
