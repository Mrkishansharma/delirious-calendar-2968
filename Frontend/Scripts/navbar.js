
fetchAndSoUserName()

function fetchAndSoUserName(){
    const userFirstName_StyleSync = localStorage.getItem('userFirstName_StyleSync') || null
    const StyleSyncLogedInUserID = localStorage.getItem('StyleSyncLogedInUserID') || null
    const userRole_StyleSync = localStorage.getItem('userRole_StyleSync') || null


    const loginBtn = document.getElementById('login')
    const adminPanel = document.getElementById('adminPanel')
    console.log(loginBtn.innerText);

    if(userRole_StyleSync=='Admin'){
        adminPanel.style.display = 'inline'
    }else{
        adminPanel.style.display = 'none'

    }

    // if(loginBtn.innerText == 'Login/Signup'){
        
        if(StyleSyncLogedInUserID){
            loginBtn.innerHTML = `<span style="color: #007bff;"> <i class="fa-solid fa-user"></i> ${userFirstName_StyleSync}</span> / Logout`
        }else{
            loginBtn.innerHTML == ''
            loginBtn.innerText == 'Login/Signup'
        }

    // }else{

    // }

}

function handleLoginBtn(){
    const loginBtn = document.getElementById('login')
    console.log(loginBtn.innerText);

    if(loginBtn.innerText == 'Login/Signup'){
        
        location.href = './login.html'

    }else{


        if(confirm('Do you want to logout?')){
            localStorage.removeItem('userFirstName_StyleSync')
            localStorage.removeItem('token_StyleSync')
            localStorage.removeItem('signedIn_StyleSync')
            localStorage.removeItem('StyleSyncLogedInUserID')
            localStorage.removeItem('userRole_StyleSync')
    
            location.reload()
        }


    }

}