function updateOutput() {

  $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");
  
  document.getElementById("outputPanel").contentWindow.eval($("#javasPanel").val());

}

$(".togglebtn").hover(function() {
  $(this).addClass("highlighted");
}, function() {
     $(this).removeClass("highlighted");
});

$(".togglebtn").click(function() {
  $(this).toggleClass("active");
  $(this).removeClass("highlighted");
  var panelId = $(this).attr("id") + "Panel";
  $("#" + panelId).toggleClass("hidden");
  var activePanels = 4 - $(".hidden").length;
  $(".panel").width(($(window).width() / activePanels) - 10);
});

$(".panel").height($(window).height() - $("header").height() - 10);

$(".panel").width(($(window).width() / 2) - 10);

updateOutput();


              $("textarea").on('change keyup paste', function() {
  
  updateOutput();
  
});