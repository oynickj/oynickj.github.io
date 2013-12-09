$(document).ready(function(){

  $("#projects").on("click", function(e){
    e.preventDefault();
    $.ajax({
      // local event
      success: function(){
        console.log('it worked');
      },
      url: "https://api.github.com/users/oynickj/repos"
    });
  })



});
