
$(document).ready(function () {
  $("#btn").click(function () {
    // $('.box').toggle(5000)
    // $('.box').slideToggle(2000)
    // $('.box').css({backgroundColor: "red", border: "3px solid yellow"})
    $('.box').animate({width: '350px'})
    $('.box').animate({height: '350px'})
    $('.box').animate({height: '200px'})
    $(".box")
      .html("kgjdkfjkjfkdjkj")
      .css({ color: "white", border: "3px solid yellow" })
      .animate({ height: "350px" });
    $("input").val("dkfkjdfkjfk");
  });

  $(".btn").click(function () {
    // $(".box").show();
    $(".box").slideDown();
    console.log($(".box").html());
    console.log($("input").val());
  });
});
