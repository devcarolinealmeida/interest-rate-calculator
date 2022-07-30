
const inputParcelas = document.querySelector("[data-parcelas]")
const displayParcela = document.querySelector("[data-p]")
const displayTotal = document.querySelector("[data-v]")



// logica: ao clicar no botao da porcentagem, capturar o botao escolhido e calcular o juros. 100(valor) * (10% de 100) porcentagem do valor. valor * (porcentagem/100)

// pegar valor do botao de juros escolhido, só pode ser um

// pegar o input das parcelas
// dividir valor com juros pela qtde de parcelas
// mostrar valor cada parcela display
// mostrar valor total com juros

const inputValor = document.querySelector("[data-valor]")
const buttonPorcentagem = document.querySelectorAll("[data-porcentagem]")

// o que sera executado qdo apertar botao porcentagem
buttonPorcentagem.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        const valorDigitado = parseInt(inputValor.value)
        var valorComJuros = calculaPorcentagem(evento.target.dataset.porcentagem, valorDigitado)
        console.log(valorComJuros)
        inputParcelas.addEventListener("input", () => {
            const nParcela = parseInt(inputParcelas.value)
            const valorDivido = valorComJuros/nParcela
            console.log(valorDivido)
            //atualizar o display ja com os calculos feitos
            
        })
    })
    
})

//final para pegar n de parcelas e mostrar no display
// inputParcelas.addEventListener("input", () => {
//     const nParcela = parseInt(inputParcelas.value)
//     console.log(valorComJuros/nParcela)
//     //atualizar o display ja com os calculos feitos
    
// })



function calculaPorcentagem(porcentagem, valor) {
    return (((porcentagem/100) * valor) + valor) 
}




