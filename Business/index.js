const closenav = () =>{
    const nav= document.getElementById("nav")
    nav.classList.replace("opennav", "closenav")
}

const opennav= () =>{
    const nav= document.getElementById("nav")
    if(nav.classList.contains("closenav")) {
        nav.classList.replace("closenav", "opennav")
    } else(
        nav.classList.add( "opennav"
        )
    )
}

const closebtn = document.getElementById("closeBtn")
closebtn.addEventListener("click", closenav)

const openbtn = document.getElementById("openBtn")
openbtn.addEventListener("click", opennav)

function openmodal(){
    modal.classList.remove("hidden")
}


const qbtn=document.getElementById("qbtn")
const modalClose=document.getElementById("modalClose")
const modal=document.getElementById("modal")


qbtn.addEventListener("click", openmodal)

function closemodal(){
    modal.classList.add("hidden")
}

modalClose.addEventListener("click", closemodal)