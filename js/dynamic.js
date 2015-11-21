document.ready(function(){

function clkDelete(){
  var check = window.confirm("Are you sure you want to delete?")
  if(check === 'true'){
    this.remove();
  }
  
}

});