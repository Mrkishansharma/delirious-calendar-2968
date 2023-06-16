
let container=document.getElementById("container")
let stylistData=JSON.parse(localStorage.getItem("stylist"))||{}
 //console.log(stylistData.name)

 container.innerHTML=`
  <div>
    <img src="${stylistData.image}" alt="">
  </div>
  <div>
    <h1>${stylistData.name}</h1>
    <p>${stylistData.bio}</p>
    <h4>${stylistData.gender}</h4>
    <h2>Speciality:</h2>
    <p>${stylistData.speciality1}</p>
    <p>${stylistData.speciality2}</p>
    <p>${stylistData.speciality3}</p>
    <h2>Email: <span style="font-size: 20px;">abc@example.com</span></h2>
    <h2>Mobile: <span id="span">+91 1234567890</span></h2>
    <button>BOOK NOW</button>
    </div>
`;

// ---------------------------------------------

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