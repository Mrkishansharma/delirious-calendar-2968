
fetchAllAppointments()
function fetchAllAppointments() {
    fetch("http://localhost:7500/appointment/getall")
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
    const htmlsdata = data.map(({ _id, customerID, stylistID, date, status, image, name, service, time }) => {
        return `<tr>
                    <td> <img src="${image}" alt="stylist-image" > </td>
                    <td>${service}</td>
                    <td> ${customerID} </td>
                    <td> ${name} <p>[ ${stylistID} ]</p></td>
                    <td> ${date} [ ${time} ]</td>
                    <td> ${status} </td>


                    <td>
                        <div>
                            <button class="appointmentBtnnnConfirm" disabled=${status!="Pending"} style="cu"> Confirm </button>
                        </div>
                        <div>
                            <button class="appointmentBtnnnReject" disabled=${status!="Pending"} > Reject </button>
                        </div>
                    </td> 

                </tr>`
    }).join(' ')
    document.getElementById('appointmentntbody').innerHTML = htmlsdata
}

