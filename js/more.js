var button = document.getElementById("showMore");
var content = document.getElementById("content");
button.onclick = function() {
  if (content.className == "open") {
    content.className = "";
    button.innerHTML = "MOSTRAR MÁS";
  }else {
    content.className = "open";
    button.innerHTML = "MOSTRAR MENOS";
  }
};