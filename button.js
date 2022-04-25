
// Add definition button//
var button = document.getElementById("my-btn");

button.onclick = function() {
  //this code will execute whenever the button is clicked
  //inside the handler, "this" refers to the button
    this.parentNode.removeChild(button);
}
var button = document.getElementById("my-btn")

function hide(element){
    element.remove();
}

// function popup() {
//     alert("Ninja was liked");
// }

function logOut(element) {
    element.innerText = "Logout";
}

function addAlert(){
    alert("Definition was added");
}
alert("Ninja was liked");

function like(elm){
    elm.innerText= parseInt(elm.innerText)+1;
    alert ("\n You Liked this definition!");
}