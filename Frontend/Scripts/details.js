
const baseUrl_details = `https://frightened-tuna-cummerbund.cyclic.app`

let container = document.getElementById("container")
let stylistData = JSON.parse(localStorage.getItem("stylist")) || {}
//console.log(stylistData.name)

container.innerHTML = `
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
    <button id="booking" onClick="openForm()">BOOK NOW</button>
    </div>
   
`;

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function submitForm() {

  //localStorage.setItem("StyleSyncLogedInUserID", "648d8db90ef794ba5d06731d")



  const userdID = localStorage.getItem('StyleSyncLogedInUserID')
  if (!userdID) {
    alert(' Kindly Login First')
    return
  }

  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  var service = document.getElementById("service").value;

  // console.log("Date: " + date);
  // console.log("Time: " + time);

  const payload = {
    date: date,
    time: time,
    stylistID: stylistData._id,
    customerID: userdID,
    name: stylistData.name,
    image: stylistData.image,
    service: service
  }

  // console.log(payload);

  fetch(`${baseUrl_details}/appointment/book`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(payload)
  }).then(res => {
    //console.log(res);
    return res.json()
  })
    .then(data => {

      console.log(data);
      if (data.message == 'On this time This Stylist is not Available ') {

        Swal.fire(
          'This Stylist is Not Availbale Now',
          'This time slot is already booked by someone else',
          'error',
        )

      } else {
        Swal.fire(
          'Your appointment has been booked',
          'See your status in the view appoinment',
          'success'
        )
      }
      //alert(data?.message)

    }).catch(err => {
      console.log(err);
    })



  closeForm();
}


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
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
}
img2.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
}
img3.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
}
img4.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
}
img5.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
}
img6.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
}
img7.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
}
img8.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
}