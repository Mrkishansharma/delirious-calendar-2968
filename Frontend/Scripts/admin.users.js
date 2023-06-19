
let usersInfoData = []

const baseUrl_users = `https://frightened-tuna-cummerbund.cyclic.app`


fetchAllUsers()
function fetchAllUsers() {
    fetch(`${baseUrl_users}/admin/alluser`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            if (data.data) {
                usersInfoData = data.data
                renderAllUsers(data.data)
            }
        })
        .catch(err => console.log(err))
}


function renderAllUsers(data) {
    document.getElementById('usertbody').innerHTML = ''
    const htmlsdata = data.map(({ _id, fname, lname, email, userType }) => {
        return `<tr>
                    <td> ${fname}  </td>
                    <td> ${lname} </td>
                    <td>${email}</td>
                    <td style="color:${userType=='Admin' ? 'blue' : 'green' }; font-weight: bold;" >
                        ${email=='admin@stylesync.com' ? 'Super Admin' : userType}
                    </td>
                    <td> <button onclick="handleRoleUser('${_id}', '${email}')" class="connectBtn"> Update Role </button> </td>
                    <td> <button onclick="handleConnectUser('${email}', '${fname}')" class="connectBtn"> Connect </button> </td>
                </tr>`
    }).join(' ')
    document.getElementById('usertbody').innerHTML = htmlsdata
}

function handleConnectUser(email, name) {
    location.href = `mailto:${email}?subject=From%20StyleSync%20salon&body=Dear%20${name}`
}

function handleRoleUser(id, email){
    if(email=='admin@stylesync.com'){
        alert('You are not able to change the role of super admin')
        return
    }
    fetch(`${baseUrl_users}/admin/updateRole/${id}`,{
        method : "PATCH",
        headers : {
            "content-type":"application/json"
        }
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        alert(data.msg)
        fetchAllUsers()
    })
    .catch(err => console.log(err))
}


function handleSearchUser(e){
    const value = e.target.value;
    if(value){
        const filterdData = usersInfoData.filter(({ _id, fname, lname, email, userType })=>{
            console.log(userType);
            return value==_id ||  fname?.toLowerCase().includes(value.toLowerCase()) || lname?.toLowerCase().includes(value.toLowerCase()) || email==value || userType.includes(value)
        })
        
        renderAllUsers(filterdData)
    }else{
        renderAllUsers(usersInfoData)
    }
    
}