$(document).ready(function(){



  $("#about_me_nav").on("click", function(e){
    e.preventDefault();
    $(this).addClass("strong");
  });

  $("#selected_projects_nav").on("click", function(e){
    e.preventDefault();
    $(this).addClass("strong");
  });

  $("#contact_nav").on("click", function(e){
    e.preventDefault();
    $(this).addClass("strong");
  });



  // $("#projects").on("click", function(e){
  //   e.preventDefault();
  //   $.ajax({
  //     // local event
  //     beforeSend: function(){
  //       $("#repos").addClass("loading")
  //     },
  //     success: function(response){
  //       $.each(response, function(index, repo){
  //         $("#repos").append('<ul>');
  //         $("#repos").find('ul').append('<li>' + repo.name + '</li>');
  //         console.log(repo.name);
  //         });
  //     },
  //     complete: function(){
  //       $("#repos").removeClass("loading")
  //     },
  //     url: "https://api.github.com/users/oynickj/repos"
  //   });
  // })



});
