
fetchAllUsers()
function fetchAllUsers() {
    fetch("http://localhost:7500/admin/alluser")
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            if (data.data) {
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
                    <td>${userType}</td>
                    <td> <button onclick="handleConnectUser('${email}', '${fname}')" class="connectBtn"> Connect </button> </td>
                </tr>`
    }).join(' ')
    document.getElementById('usertbody').innerHTML = htmlsdata
}

function handleConnectUser(email, name) {
    location.href = `mailto:${email}?subject=From%20StyleSync%20salon&body=Dear%20${name}`
}