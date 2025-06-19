
let logradouro = document.getElementById("logradouro")
let bairro = document.getElementById("bairro")
let regiao = document.getElementById("regiao")
let estado = document.getElementById("estado")

let input_cep = document.getElementById("input_cep")
let buscar = document.getElementById("btn-cep")

function buscarCEP(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data)
        logradouro.innerText = data.logradouro
        bairro.innerText = data.bairro
        regiao.innerText = data.regiao
        estado.innerText = data.estado
    })
}

buscar.addEventListener('click', function(event){
    event.preventDefault();
    buscarCEP(input_cep.value)
})