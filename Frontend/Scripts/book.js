let stylistData = JSON.parse(localStorage.getItem("stylist")) || null;

    const getData=()=>{
        fetch("http://localhost:7500/stylist/getstylist",{
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
            let name=document.createElement("h2")
            name.textContent=element.name
            let gender=document.createElement("p")
            gender.textContent=element.gender
            let speciality=document.createElement("h3")
            speciality.textContent=element.speciality1+", "+element.speciality2+", "+element.speciality3
            let rating=document.createElement("h4")
            rating.textContent= "rating:"+element.rating
            let btn=document.createElement("button")
            btn.textContent="View Details >"
            btn.addEventListener("click",()=>{
                stylistData = element;
                localStorage.setItem("stylist", JSON.stringify(stylistData));
                console.log(stylistData);
                window.location.assign("details.html");
            })
            
            div1.append(img)
            div2.append(name,gender,speciality,rating,btn)
            div.append(div1,div2)
            container.append(div)
        })
    }


    let fil=document.getElementById("fil")
    fil.addEventListener('click',()=>{
        var serviceValue = document.querySelector('.salon:checked').value;
        console.log(serviceValue)
        fetch(`http://localhost:7500/stylist/service?q=${serviceValue}`,{
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
        .then(res=>{
            console.log(res)
            appendData(res)
        })
        .catch(err=>console.log(err))
    })   

    fil.addEventListener('click',()=>{
        var starValue = document.querySelector('.star:checked').value;
        console.log(starValue)
        fetch(`http://localhost:7500/stylist/rating?q=${starValue}`,{
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
        .then(res=>{
            console.log(res)
            appendData(res)
        })
        .catch(err=>console.log(err))
    })
   

    let stylist=document.getElementById("stylist")
    let btn=document.getElementById("search")
    btn.addEventListener("submit",(e)=>{
       e.preventDefault();
        data=stylist.value;
        //console.log(data)
         
        fetch(`http://localhost:7500/stylist/search?q=${data}`,{
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
        .then(res=>{
            console.log(res)
            appendData(res)
        })
        .catch(err=>console.log(err))
    })
    