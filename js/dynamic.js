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


}



});