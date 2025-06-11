let button = document.getElementById("btn-cep")
let logradouro = document.getElementById("logradouro")
let bairro = document.getElementById("bairro")
let regiao = document.getElementById("regiao")
let estado = document.getElementById("estado")

let input_cep = document.getElementById("input-cep")
let buscar = document.getElementById("btn-cep")

button.addEventListener("click",function(event){
    event.preventDefault()

    let cep = document.getElementById("input-cep").value
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    

    .then((res)=>res.json())
    .then((data)=>{

        console.log(data)
        logradouro.innerText = data.logradouro
        bairro.innerText = data.bairro
        regiao.innerText = data.regiao
        estado.innerText = data.estado


    
    })
    
}
)

button.addEventListener('click',function(event){
    buscar
})