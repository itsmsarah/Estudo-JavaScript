const arquivo = true;

const baixarAquivo = new Promise ((resolve,reject)=>{
    setTimeout(() => {
        if{
            
        }
            resolve("video.mp4,150MB")
        } else{
            reject("Falha ao baixar o arquivo ❌")
        }
    },2000);
})

baixarAquivo
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })