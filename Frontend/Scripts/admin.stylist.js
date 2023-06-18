
const adminGetStylist=()=>{
    fetch("http://localhost:7500/stylist/getstylist",{
        headers:{
            "Content-Type":"application/json",
        },
    })
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data.data)
        renderAllStylist(data.data)
    })
    .catch(err=>console.log(err))
}
adminGetStylist();


let container=document.getElementById("adminStylist")
    function renderAllStylist(data){
        
        container.innerHTML=""
        data.forEach(element=>{
            let tr=document.createElement("tr")

            let td1=document.createElement("td")
            let img=document.createElement("img")
            img.src=element.image

            let td2=document.createElement("td")
            td2.textContent=element.name

            let td3=document.createElement("td")
            td3.textContent=element.gender
            let td4=document.createElement("td")
            td4.textContent=element.speciality1+", "+element.speciality2+", "+element.speciality3
           
            
           td1.append(img)
           tr.append(td1,td2,td3,td4)
            container.append(tr)
        })
    }

    




