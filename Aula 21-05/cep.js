let button = document.getElementById("btn-cep")


button.addEventListener("click",function(event){
    event.preventDefault()

    let cep = document.getElementById("input-cep").value
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    

    .then((res)=>res.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
})