function fnCarregarDados(){
const url = "https://api.github.com/users/guilherme-costa14"
fetch(url)
    .then(resposta => {
        return resposta.json()
    })
    .then(dados=>{
        console.dir(dados)
    })
}