
const key = "adf1cbf3cde84d5465635b0d1dd64e56"

function colocarDadosNaTela(dados){
    
}


async function buscarCidade(cidade){
    const dados= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br`).then(resposta => resposta.json())
    
    colocarDadosNaTela(dados)
 }

function cliqueiNoBotao() {
    const cidade = document.querySelector(".cidade").value

    buscarCidade(cidade)
}
