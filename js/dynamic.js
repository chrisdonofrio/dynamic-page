$(document).ready(function(){

$(".btn-primary").each(function(){

  $(this).on("click", create());
})

function clkDelete(){
  var check = window.confirm("Are you sure you want to delete?")
  if(check === 'true'){
    $(this).remove();
  }

}

function hoverParents(){
  $("#displayParents").html(this.parents());

}

function create(){

  var newInput = $("<input>").attr("type", "checkbox");
  $("body").append(newInput);
}

$("#inputBtn").on("click", function() {
  var newInput = $("<input>").attr("type", "checkbox");
  $("body").append(newInput);
});

});