
const baseUrl_stylist = `https://frightened-tuna-cummerbund.cyclic.app`

const adminGetStylist=()=>{
    fetch(`${baseUrl_stylist}/stylist/getstylist`,{
        headers:{
            "Content-Type":"application/json",
        },
    })
    .then((res)=> res.json())
    .then((data)=>{
        //console.log(data.data)
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
           let td5=document.createElement("td")
           let btn=document.createElement("button")
           btn.textContent="Remove"
           
           btn.addEventListener("click",()=>{
            console.log(element._id)
           fetch(`${baseUrl_stylist}/stylist/delete/${element._id}`,{
             method:"DELETE",
             headers:{
                 "Content-Type": "application/json"
             },
             }).then(res=>res.json())
             .then((data)=>{
              console.log(data)
              location.reload()
            })
             .catch(err=>console.log(err))
         })

            
           td1.append(img)
           td5.append(btn)
           tr.append(td1,td2,td3,td4,td5)
            container.append(tr)
        })
    }

//  -------------------------add stylist-----------------------------   

 function submitform(){
  var image = document.getElementById("image").value;
  var name = document.getElementById("name").value;
  var gender = document.getElementById("gender").value;
  var bio = document.getElementById("bio").value;
  var speciality1 = document.getElementById("speciality1").value;
  var speciality2 = document.getElementById("speciality2").value;
  var speciality3 = document.getElementById("speciality3").value;
  var rating = document.getElementById("rating").value;
  

  
  const payload = {
    image : image,
    name : name,
    gender : gender, 
    bio : bio,
    speciality1 : speciality1,
    speciality2 : speciality2,
    speciality3 : speciality3,
    rating : rating

  }

  console.log(payload)


 

  fetch(`${baseUrl_stylist}/stylist/addstylist`, {
    method : "POST",
    headers : {
      "content-type" : "application/json"
    },
    body: JSON.stringify(payload)
  }).then(res=>{
    //console.log(res);
    return res.json()
  })
  .then(data => {
        console.log(data);
     //alert(data?.message)
  
  }).catch(err => {
    console.log(err);
  })

}
    




