$(document).ready(function(){

//   $("#about_me_nav").on("click", function(e){
//     e.preventDefault();
//     $.ajax({
//       url: "about_me.html",
//       success: function(content) {
//         debugger;
//       }
//     });
//   });

// nave bar bolding/unbolding and add/remove sections
  $(".tab").on("click", function(e){
    e.preventDefault();
    $(this).parents("ul").children("li").removeClass("active");
    $(this).addClass("active");
    // add and remove sections
    $("#content .tab_active").removeClass("tab_active");
    var activate_tab = $(this).find("a").attr("href");
    $(activate_tab).addClass("tab_active");
    // console.log($(this).find("a").attr("href"));

  });

});
