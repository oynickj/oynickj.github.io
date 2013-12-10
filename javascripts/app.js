$(document).ready(function(){

  $("#projects").on("click", function(e){
    e.preventDefault();
    $.ajax({
      // local event
      beforeSend: function(){
        $("#repos").addClass("loading")
      },
      success: function(response){
        $.each(response, function(index, repo){
          $("#repos").append('<ul>');
          $("#repos").find('ul').append('<li>' + repo.name + '</li>');
          console.log(repo.name);
          });
      },
      complete: function(){
        $("#repos").removeClass("loading")
      },
      url: "https://api.github.com/users/oynickj/repos"
    });
  })



});
