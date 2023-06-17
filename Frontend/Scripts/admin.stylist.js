
const adminGetStylist=()=>{
    fetch("http://localhost:7500/stylist/getstylist",{
        headers:{
            "Content-Type":"application/json",
        },
    })
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data.data)
        //renderAllStylist(data.data)
    })
    .catch(err=>console.log(err))
}
adminGetStylist();





