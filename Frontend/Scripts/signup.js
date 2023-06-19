const url = "https://frightened-tuna-cummerbund.cyclic.app";

let signbtn = document.getElementById("btn");
signbtn.addEventListener("click", (e) => {
  e.preventDefault();
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  
  // showLoader();

  if(!fname || !lname || !pass || !email){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Fill All the Required Details",
    });
    return;
  }

  // Loader Showing
  // document.getElementById("btn").style.visibility = "hidden";

  let signdata = {
    fname: fname,
    lname:lname,
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

      if (res.status) {
        Swal.fire(
            'Registration Successfull',
            '',
            'success'
          )
        // Transfer to login page here
        // setTimeout(()=>{
        //   window.location.href = "./login.html";
        // },2500)
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: res.error,
        });

      //   hideLoader();
      //   document.getElementById("btn").style.visibility = "visible";
      }
    })
    .catch((err) => {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.message,
      });
      // hideLoader();
      // document.getElementById("btn").style.visibility = "visible";
    });
});

