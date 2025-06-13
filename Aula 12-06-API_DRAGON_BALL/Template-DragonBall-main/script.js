let personagens_container = document.getElementById("personagens-container")

fetch("https://dragonball-api.com/api/characters?limit=58")
// tava limitada por 10 mas colocamos 58 pra aumentar 
.then((res)=> res.json())
.then((data)=>{
    console.log(data)
    data.items.forEach(personagem=>{
        // ele definiu que vai o foreach vai passar por personages, vai se entitular de persinagens nesse caso por conta de ser do dragon ball z
        const card = document.createElement("div") // é como se tivesse criado uma div no html
        //criar um documento html sozinho, ai dentro das chaves abre a classe que vc quer criar
        card.className="card"
        // ele criou uma classe para o card ( que ta la no css) e pega a estilização dele
        card.innerHTML = `
        <img src ="${personagem.image}">
        <h2>${personagem.name}</h2>
        <p>Raça:${personagem.race}</p>
        <p>Gênero:${personagem.gender}</p>     
        `
        //nn chamou o items pq ele meio q funciona ja como um array, por isso foi pra personagem
        //texto com parâmetro usa crase
        //inner.html consegue alterar a tag inteira

        personagens_container.appendChild(card)
        //vai adicionar o conteúdo, ou seja, nosso card

        
    });

})



// let nomes =["Sarah","Beyonce","Theweeknd"]


// //forEach faz percorrer pelo array de maneira individual, ou seja, executando um elemento por vez do array
// nomes.forEach((n)=>{
//     console.log(`Olá${n}`)
// })