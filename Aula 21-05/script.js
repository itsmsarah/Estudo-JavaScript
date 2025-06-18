let button = document.getElementById("conselho")
let conselho = document.getElementById("conselho-gerado")


button.addEventListener("click", function(){
     
    fetch("https://api.adviceslip.com/advice")
    .then((res)=>res.json())

    .then((data)=> {
        console.log(data)
        conselho.innerText = data.slip.advice
    })
        

    .catch((err)=>console.log(err))
    
})