$(document).ready(function() {
  $("#formName").submit(function(event) {
    event.preventDefault();

    var nameInput = $("input#name").val();
    var foodInput = $("#fav-foodType").val();
    var musicInput = $("input:radio[name=music]:checked").val();
    var colorInput = $("#color").val();
    


  $(".name").text(nameInput);
  // $("span.food").text(foodInput);
  // $("span.music").text(musicInput);
  // $("span.color").text(colorInput);
  $(".food").text(foodInput);
  $(".music").text(musicInput);
  $(".color").text(colorInput);

  $(".results").show();

  });
});




  