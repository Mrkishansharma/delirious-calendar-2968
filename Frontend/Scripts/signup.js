const url = "http://localhost:7500";

let signbtn = document.getElementById("btn");
signbtn.addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  

  if(!name || !pass || !email){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "E-mail and Password can't be empty",
    });
    return;
  }

  // Loader Showing
  // showLoader();
  document.getElementById("btn").style.visibility = "hidden";

  let signdata = {
    name: name,
    email: email,
    password: pass,
  };

  fetch(`${url}/user/register`, {
    method: "POST",
    body: JSON.stringify(signdata),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      // document.getElementById("name").value = "";
      // document.getElementById("lname").value;
      // document.getElementById("email").value = "";
      // document.getElementById("pass").value = "";

      // if (res.ok) {
      //   Swal.fire(
      //       'Registration Successfull',
      //       '',
      //       'success'
      //     )
      //   // Transfer to login page here
      //   setTimeout(()=>{
      //     window.location.href = "./login.html";
      //   },2500)
      // } else {
      //   Swal.fire({
      //     icon: "error",
      //     title: "Oops...",
      //     text: res.msg,
      //   });

      //   hideLoader();
      //   document.getElementById("btn").style.visibility = "visible";
      // }
    })
    .catch((err) => {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.message,
      });
      // hideLoader();
      document.getElementById("btn").style.visibility = "visible";
    });
});

