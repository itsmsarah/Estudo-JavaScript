let button = document.getElementById("conselho")
let conselho = document.getElementById("conselho-gerado")

button.addEventListener("click", function(){
    fetch("https://catfact.ninja/fact")

    .then((res)=>res.json())

    .then((data)=>{
        console.log(data)
        conselho.innerText = data.fact

    })

    .catch((err)=>console.log(err))
})