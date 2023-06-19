let userInfoObj = {}

const baseUrl_appointment = `https://frightened-tuna-cummerbund.cyclic.app`


fetchAllUsers()
function fetchAllUsers() {
    fetch(`${baseUrl_appointment}/admin/alluser`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data?.data)
            if(data.data){
                for(let i=0; i<data.data.length; i++){
                    // console.log(data.data[i].fname);
                    let key = data.data[i]._id
                    let value = data.data[i]?.fname + ' ' +  data.data[i]?.lname
                    userInfoObj[key] = value
                }
                fetchAllAppointments()
            }
        })
        .catch(err => console.log(err))
}




// fetchAllAppointments()
function fetchAllAppointments() {
    fetch(`${baseUrl_appointment}/appointment/getall`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            if (data.data) {
                console.log(data);
                renderAllAppointmets(data.data)
            }
        })
        .catch(err => console.log(err))
}


function renderAllAppointmets(data) {
    document.getElementById('appointmentntbody').innerHTML = ''

    data.reverse()

    const htmlsdata = data.map(({ _id, customerID, stylistID, date, status, image, name, service, time }) => {

        return `<tr>
                    <td> <img src="${image}" alt="stylist-image" > </td>
                    <td>${service}</td>
                    <td> ${userInfoObj[customerID]} <p> [ ${customerID} ] </p> </td>
                    <td> ${name} <p>[ ${stylistID} ]</p></td>
                    <td> ${date} [ ${time} ]</td>
                    <td 
                        style="color:${(status=='Cancel' ||status=='Reject' ) ? 'red': (status=='Pending') ? 'blue':'green'}; font-weight:bold;"
                    >
                     ${(status=='Pending') ?  'Pending' :  status+'ed'} 
                     
                    </td>


                    <td>
                        <div>
                            <button class="appointmentBtnnnConfirm" onclick="handleConfirm('${status}', '${_id}' )"  >
                             Confirm 
                            </button>
                        </div>
                        <div>
                            <button class="appointmentBtnnnReject"  onclick="handleReject('${status}', '${_id}' )"  > Reject </button>
                        </div>
                    </td> 

                </tr>`
    }).join(' ')
    document.getElementById('appointmentntbody').innerHTML = htmlsdata
}

function handleConfirm(status,id){
    console.log(status,id);
    if(status == 'Confirm'){
        alert('Appointment Already Confirmed')
        return
    }
    if(status == 'Reject'){
        alert('Appointment is Rejected')
        return
    }
    if(status == 'Cancel'){
        alert('Appointment is Canceled')
        return
    }

    fetch(`${baseUrl_appointment}/appointment/confirm/${id}`, {
        method : "PATCH",
        headers : {
            "Content-type" : "application/json"
        }
    }).then(res => res.json())
    .then(data => {
        console.log(data);
        fetchAllAppointments()
    }).catch(err=>{
        console.log(err);
        alert('Something Went Worng. (Please Try Again After Some Time)')
    })


}

function handleReject(status,id){
    console.log(status,id);
    if(status == 'Confirm'){
        alert('Appointment is Confirmed')
        return
    }
    if(status == 'Reject'){
        alert('Appointment is Already Rejected')
        return
    }
    if(status == 'Cancel'){
        alert('Appointment is Canceled')
        return
    }

    fetch(`${baseUrl_appointment}/appointment/reject/${id}`, {
        method : "PATCH",
        headers : {
            "Content-type" : "application/json"
        }
    }).then(res => res.json())
    .then(data => {
        console.log(data);
        fetchAllAppointments()
    }).catch(err=>{
        console.log(err);
        alert('Something Went Worng. (Please Try Again After Some Time)')
    })


}