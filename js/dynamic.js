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

$("#inputBtn").on("click", function() {
  var newInput = $("<input>").attr("type", "checkbox");
  $("body").append(newInput);
});

$("#spanBtn").on("click", function() {
  var newSpan = $("<span>").addClass("red");
  $("body").append(newSpan);
});

$("#tableBtn").on("click", function() {
  var newTable = $("<table>").addClass("table").append(newRow);
  var newRow = $("<tr>").append(newCol);
  var newCol = $("<td>");
  $("body").append(newTable);
});

$("#buttonBtn").on("click", function() {
  var newButton = $("<button>").addClass("btn btn-block");
  $("body").append(newButton);
});

$("#paraBtn").on("click", function() {
  var newPara = $("<p>").append(document.createTextNode("al;ksdfjl;kasjdflkasjdf;lkasjdf;lkj;aslkdfjaslk;dfjaskldfjkl;asdjflk;adsjflk;asjdf;lk"));
  $("body").append(newPara);
});

$("#divBtn").on("click", function() {
  var newDiv = $("<div>").addClass("blue");
  $("body").append(newDiv);
});

});