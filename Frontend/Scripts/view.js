


const getData=()=>{
    fetch("http://localhost:7500/appointment/getall",{
        headers:{
            "Content-Type":"application/json",
        },
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data.data)
        appendData(data.data)
    })
    .catch(err=>console.log(err))
}
getData();
let container=document.querySelector(".container")
    function appendData(data){
        
        container.innerHTML=""
        data.forEach(element=>{
            let div=document.createElement("div")

            let div1=document.createElement("div")
            let img=document.createElement("img")
            img.src=element.image

            let div2=document.createElement("div")
            let name=document.createElement("h1")
            name.textContent=element.name
            let service=document.createElement("h3")
            service.textContent=element.service
            let date=document.createElement("h3")
            date.textContent=element.date
            let time=document.createElement("h3")
            time.textContent=element.time
            let status=document.createElement("h2")
            status.textContent=element.status
            if(element.status=="Pending")
            {
                status.style.color="orange"
            }
            else if(element.status=="Confirm")
            {
                status.style.color="green"
            }
            else{
                status.style.color="red"
            }
            if(element.status=="Pending"){
                
                let btn=document.createElement("button")
                btn.textContent="Cancel"
                
                btn.addEventListener("click",()=>{
                    //console.log(element._id)
                    fetch(`http://localhost:7500/appointment/cancel/${element._id}`,{
                        method:"PATCH",
                        headers:{
                            "content-type":"application/json"
                        }
                    }).then(res=>res.json())
                    .then(data=>{
                        location.reload()
                        console.log(data)
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                })
                
                div1.append(img)
                div2.append(name,service,date,time,status,btn)
                div.append(div1,div2)
                container.append(div)
            }
            else{
                div1.append(img)
                div2.append(name,service,date,time,status)
                div.append(div1,div2)
                container.append(div)
            }
        })
    }

