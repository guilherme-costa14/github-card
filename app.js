function fnCarregarDados() {
    const url = "https://api.github.com/users/guilherme-costa14"
    fetch(url)
        .then(resposta => {
            return resposta.json()
        })
        .then(dados => {
            console.dir(dados)
        })
}

function fnMostrarDados(foto, nome, resumo, email, twitter, github, blog) {
    document.getElementById("foto").src = foto
    document.getElementById("nome").innerHTML = nome
    document.getElementById("resumo").innerHTML = resumo + "<br><strong id='email'></strong>"
    document.getElementById("email").innerHTML = email
    document.getElementById("twitter").href = twitter
    document.getElementById("github").href = github
    document.getElementById("blog").href = blog
}

let botao = document.getElementById("botao-carregar-dados")
botao.addEventListener("click", function () {
    fnMostrarDados("foto.jgp", "Guilherme Costa", "Aluno", "teste@gmail.com", "https://x.com", "https://github.com", "https://dev.to")
})