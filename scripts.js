/* let = VARIAVEL */
/* function = FUNÇÃO */
/* document = HTML */
/* querySelector = buscar algo no HTML */

let circulo = document.querySelector(".circulo")
let imagem = document.querySelector(".copao-starbucks")

function trocarcor(cor){
    circulo.style.background = cor 
}

function trocarImagem(img) {
    imagem.src = img
}

