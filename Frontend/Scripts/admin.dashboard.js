

const totalCout_user = document.getElementById('totalCout_user');
const totalCout_Stylist = document.getElementById('totalCout_Stylist');
const totalCout_appointments = document.getElementById('totalCout_appointments');

const totalCout_revenue = document.getElementById('totalCout_revenue');


const baseUrl_dashboard= `https://frightened-tuna-cummerbund.cyclic.app`

setInterval(()=>{

    totalCout_revenue.innerText = ' Rs. ' + Math.ceil(Math.random()*9999+9999) + ' /-'

},10000)

const totalCout_confirm = document.getElementById('totalCout_confirm');
const totalCout_cancel = document.getElementById('totalCout_cancel');
const totalCout_reject = document.getElementById('totalCout_reject');
const totalCout_pending = document.getElementById('totalCout_pending');



fetchAllUsers()
function fetchAllUsers() {
    fetch(`${baseUrl_dashboard}/admin/alluser`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            if (data.data) {
                // renderAllUsers(data.data)
                console.log('total users', data.data);
                totalCout_user.innerText = data.data.length
            }
        })
        .catch(err => console.log(err))
}

adminGetStylist()
function  adminGetStylist(){
    fetch(`${baseUrl_dashboard}/stylist/getstylist`,{
        headers:{
            "Content-Type":"application/json",
        },
    })
    .then((res)=> res.json())
    .then((data)=>{
        console.log('total Stylists',data.data)
        totalCout_Stylist.innerText = data.data.length
        // renderAllStylist(data.data)
    })
    .catch(err=>console.log(err))
}





fetchAllAppointments()
function fetchAllAppointments() {
    fetch(`${baseUrl_dashboard}/appointment/getall`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            if (data.data) {
                console.log('total appointemnts',data.data);
                totalCout_appointments.innerText = data.data.length
                mapAndReduceAppointments(data.data)
                // renderAllAppointmets(data.data)
            }
        })
        .catch(err => console.log(err))
}



function mapAndReduceAppointments(data){
    const obj = {
        Pending : 0,
        Confirm : 0,
        Reject : 0,
        Cancel : 0
    }
    data.forEach(({status}) => {
        obj[status]++
    })
    console.log(obj);

    totalCout_confirm.innerText = obj['Confirm']
    totalCout_cancel.innerText = obj['Cancel']
    totalCout_reject.innerText = obj['Reject']
    totalCout_pending.innerText = obj['Pending']

}