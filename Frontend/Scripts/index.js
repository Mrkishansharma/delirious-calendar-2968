var modal = document.getElementById("myModal");

var img = document.getElementById("myImg");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var img5 = document.getElementById("myImg5");
var img6 = document.getElementById("myImg6");
var img7 = document.getElementById("myImg7");
var img8 = document.getElementById("myImg8");

var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
img3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
img4.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
img5.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
img6.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
img7.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
img8.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}