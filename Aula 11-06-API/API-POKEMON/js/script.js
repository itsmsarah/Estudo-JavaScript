let pokemonImage = document.getElementById("pokemon_image")
let pokemonNumber = document.getElementById("pokemon_number")
let pokemonName = document.getElementById("pokemon_name")

let bnt_Search = document.getElementById("btn-search")

let input = document.getElementById("input_search")

let btnPrev = document.getElementById("btn-prev")
let btnNext = document.getElementById("btn-next")
let searchPokemon = 1

function renderPokemon(pokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res)=>res.json())
    .then((data)=>{

        console.log(data.sprites.versions["generation-v"]["black-white"].animated.front_default)
        pokemonImage.style.display = "block"
        input.value="" // assim que digitar e vc da enter , ele apaga dnv
       pokemonName.innerText = data.name
       pokemonNumber.innerText = data.id
    //   pokemonImage.src = data.sprites.front_default
       pokemonImage.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default

       searchPokemon = data.id //Atualiza a variável de controle, ou seja, qd vc encontrar o pokemon vc adiciona o id dele nessa variavel searchpokemon

    })
    .catch((err)=>{
        pokemonName.innerText = "Não encontrado"
        pokemonImage.style.display ="none"
        

    })

}

bnt_Search.addEventListener("click",function(event){
    event.preventDefault()

    renderPokemon(input.value)

})


btnPrev.addEventListener("click",function(){
    if(searchPokemon>1){
        searchPokemon -=1
        renderPokemon(searchPokemon)
    }
})

btnNext.addEventListener("click",function(){
    if(searchPokemon+=1){
        renderPokemon(searchPokemon)
    }
})

renderPokemon("ditto")
    
