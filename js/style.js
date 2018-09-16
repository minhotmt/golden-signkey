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
  $("li").click(function () {
    $(".timeline-dialog").hide();
    var timeline_dialog = $(this).find(".timeline-dialog")[0];
    if (timeline_dialog != "undefined") {
      var number_id = timeline_dialog.id.split("-")[1];
      for (var i = 0; i < number_id; i++) {
        var id_dialog = "#dialog-" + number_id;
        $(id_dialog).show();
      }
    }
  });
});