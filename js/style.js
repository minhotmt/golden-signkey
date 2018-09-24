$(function () {
  $(".load-more-button").click(function () {
    $(".load-more-icon").show();
    $(".load-less-button").show();
    $(this).hide();
  });

  $(".load-less-button").click(function () {
    $(".load-more-icon").hide();
    $(".load-more-button").show();
    $(this).hide();
  });
  $("li").hover(function () {
    $(".timeline-dialog").hide();
    document.getElementById("dialog-1").style.display = "block";
    var timeline_dialog = $(this).find(".timeline-dialog")[0];
    if (timeline_dialog != "undefined") {
      var number_id = timeline_dialog.id.split("-")[1];
      for (var i = 0; i < number_id; i++) {
        var id_dialog = "#dialog-" + number_id;
        if(number_id != 1){
          document.getElementById("dialog-1").style.display = "none";
        }
        $(id_dialog).show();
      }
    }
  });
});

jQuery(document).ready(function ($) {
  document.getElementById("dialog-1").style.display = "block";
  $('a.nav-link').on('click', function () {
    var href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, "slow");
  });
});