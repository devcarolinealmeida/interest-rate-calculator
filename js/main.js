const inputValor = document.querySelector("[data-valor]")
const buttonPorcentagem = document.querySelectorAll("[data-porcentagem]")
const inputParcelas = document.querySelector("[data-parcelas]")
const displayParcela = document.querySelector("[data-p]")
const displayTotal = document.querySelector("[data-v]")
const buttonReset = document.getElementById("recalcular")

// o que sera executado qdo apertar botao porcentagem
buttonPorcentagem.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        const valorDigitado = parseInt(inputValor.value)
        var valorComJuros = calculaPorcentagem(evento.target.dataset.porcentagem, valorDigitado)
        console.log(valorComJuros)
        inputParcelas.addEventListener("input", () => {
            const nParcela = parseInt(inputParcelas.value)
            const valorDivido = valorComJuros/nParcela
            displayParcela.textContent = valorDivido.toFixed(2)
            displayTotal.textContent = valorComJuros.toFixed(2)
        })
    })
    buttonReset.addEventListener("click", () => {
        inputValor.value = ""
        inputParcelas.value = ""
        displayParcela.textContent = "00.00"
        displayTotal.textContent = "00.00"
    })
})




    


function calculaPorcentagem(porcentagem, valor) {
    return (((porcentagem/100) * valor) + valor) 
}




