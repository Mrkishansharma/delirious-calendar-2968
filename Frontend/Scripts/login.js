const url = "https://frightened-tuna-cummerbund.cyclic.app";

// login script is  start hare
let login = document.getElementById("login-form");

login.addEventListener("submit", (e) => {
  e.preventDefault();

  let lemail = document.getElementById("lemail").value;
  let lpass = document.getElementById("lpass").value;

  if (!lemail || !lpass) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "E-mail and Password can't be empty",
    });
    return;
  }

  // Loader Showing

  // document.getElementById("login").style.visibility = "hidden";

  let signdata = {
    email: lemail,
    password: lpass,
  };


  fetch(`${url}/user/login-user`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(signdata),
  })
    .then((res) => res.json())

    .then((res) => {
      console.log(res)
      // document.getElementById("lemail").value = "";
      // document.getElementById("lpass").value = "";
      if (res.status=='ok') {
        Swal.fire(

          'Login Successfull',
          '',
          'success'
        )
        localStorage.setItem("userFirstName_StyleSync", res.userDetails.fname);
        localStorage.setItem("userRole_StyleSync", res.userDetails.userType);
        localStorage.setItem("token_StyleSync", res.data);
        localStorage.setItem("signedIn_StyleSync",true)
        localStorage.setItem("StyleSyncLogedInUserID", res.userID)
        window.location.href = "./index.html";

      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: res.message,
        });

        // hideLoader();
        // document.getElementById("login").style.visibility = "visible";
      }

    })
    .catch((err) => {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "Oops... Something Went Wrong",
        text: err.message,
      });
      
      // document.getElementById("login").style.visibility = "visible";
    });
});









function HandleGoogleSignup(){

  // document.getElementById('niteshgoogleauth').innerHTML = `<i class="fa fa-refresh fa-spin"></i> Google`;
  window.location.href = `https://frightened-tuna-cummerbund.cyclic.app/user/auth/google`;

}